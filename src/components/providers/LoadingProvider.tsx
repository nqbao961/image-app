import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoadingContext } from "../../hooks/loading";
import Loading from "../common/Loading";

export function LoadingProvider(props: any) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        show: () => setLoading(true),
        hide: () => setLoading(false),
      }}
    >
      <>
        {loading && <Loading />}
        {props.children}
      </>
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
