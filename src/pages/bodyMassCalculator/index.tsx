import { ReactNode, useState } from "react";
import { Button } from "../../components/Button";
import { ItemBmi } from "../../components/ItemBmi";
import { calculateBmi, Level, levels } from "../../helpers/bmi";
import { DashBord } from "../../styles/themes/DashbordTheme";
import * as C from "./styled";

type Props = {
  children?: ReactNode;
};

export const BodyMassCulculator = ({ children }: Props) => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCulculateButton = () => {
    if (heightField && weightField) {
      let a = calculateBmi(heightField, weightField);
      setToShow(a);
    } else {
      return alert("Enter all fields");
    }
  };
  const closeItemShow = () => setToShow(null);
  return (
    <DashBord>
      <C.Container>
        <div className="areaHeader">
          <h2>body mass index calculator</h2>
        </div>
        <div className="contentArea">
          <div className="infor">
            <p>
              calculate your body mass here, and see if you are at the ideal
              weight for you
            </p>

            <input
              type="text"
              placeholder="Enter your height. Ex: 1.5 (in meters)"
              onChange={(e) => setHeightField(parseFloat(e.target.value))}
            />
            <input
              type="number"
              placeholder="Enter your weight. Ex: 75.3 (in kg)"
              onChange={(e) => setWeightField(parseFloat(e.target.value))}
            />
            <Button
              onClick={handleCulculateButton}
              bg="--color-h2"
              label="Calculate"
            />
          </div>
          <section>
            {!toShow && (
              <div className="gridArea">
                {levels.map((item, index) => (
                  <ItemBmi item={item} key={index} />
                ))}
              </div>
            )}
            {toShow && (
              <>
                <Button onClick={closeItemShow} bg="--color-h2" label="←" />{" "}
                <ItemBmi item={toShow} />
              </>
            )}
          </section>
        </div>
      </C.Container>
    </DashBord>
  );
};
