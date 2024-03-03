import styles from "./Recepies.module.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firestore/firestore";
import firebase from "firebase/compat/app";

interface Recepie {
  name: number;
  ingredients: string[];
  dateCreated: firebase.firestore.Timestamp;
}

const Recepies: React.FC = () => {
  const [items, setItems] = useState<Recepie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = await getDocs(collection(db, "recepies"));
        let usersArr: Recepie[] = [];
        docRef.forEach((doc) => {
          let obj = JSON.stringify(doc.data());
          const parsed = JSON.parse(obj);

          usersArr.push(parsed);
          setItems(usersArr);
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["container"]}>
      {items.map((item, index) => (
        <div key={index} className={styles["recepie"]}>
          <div className={styles["recepie-img"]}>
            <img src={""} alt="carbonara" />

            <div className={styles["recepie-info"]}>
              <fieldset>
                <legend>Recepie</legend>
                <h1>{item.name}</h1>
                <div>{item.ingredients.join(" ")}</div>
                <div>{item.dateCreated.seconds}</div>
              </fieldset>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recepies;
