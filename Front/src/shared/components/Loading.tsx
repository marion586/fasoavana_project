import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

type Props = {
  loading?: boolean;
  fullscreen?: boolean;
  count?: number;
  max?: number;
  isShowCounter?: boolean;
};

const Loading: React.FC<Props> = ({
  loading = false,
  fullscreen = true,
  count = 0,
  max = 1,
  isShowCounter = false,
}) => {
  const [step, setStep] = useState<number>(0);
  useEffect(() => {
    setStep(count);
  }, [count]);
  const LoadingRender = (
    <div style={loadingStyles.loadingText(isShowCounter)}>
      {isShowCounter ? (
        <span>
          Chargement... {step}/{max}
        </span>
      ) : (
        <span>Chargement  <Spinner /></span>
      )}
    </div>
  );
  if (fullscreen)
    return (
      <div
        style={{
          position: "fixed",
          ...loadingStyles.container,
          display: loading ? "flex" : "none",
        }}
      >
        {LoadingRender}
      </div>
    );
  if (loading)
    return <div className="flex justify-center">{LoadingRender}</div>;
  return null;
};

const loadingStyles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7e829900",
    zIndex: 9999999999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "none",
  },
  loadingText: (isShowCounter?: boolean) => ({
    backgroundColor: "#131628",
    padding: "7px 20px",
    borderRadius: 7,
    boxShadow: "0 0 7px #131628",
    color: "#FFF",
    marginTop: 30,
    maxWidth: isShowCounter ? 300 : 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};

export default Loading;
