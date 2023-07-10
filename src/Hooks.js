/**
 * Hook from GavKilbride on StackOverflow
 * https://stackoverflow.com/questions/46140764/polling-api-every-x-seconds-with-react
 */
import React, { useState, useEffect, useRef } from "react";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
