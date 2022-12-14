import { getDatabase, onValue, ref, set } from "firebase/database";
import { useState, useEffect } from "react";
import useAuth from "./useAuth";

export default function useReference(reference: string | undefined, defaultVal = null) {
  const [currentVal, setCurrentVal] = useState(defaultVal);

  const updateReference = (newVal: unknown) => {
    const databaseReference = ref(getDatabase(), reference);
    set(databaseReference, newVal);
  };

  const { user } = useAuth();

  useEffect(() => {
    const databaseReference = ref(getDatabase(), reference);

    const unsubscribeCallback = onValue(databaseReference, (snapshot) => {
      setCurrentVal(snapshot.val());
    });

    return unsubscribeCallback;
  }, [user]);

  return [currentVal, updateReference];
}