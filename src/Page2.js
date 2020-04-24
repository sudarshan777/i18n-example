import React from "react";

// the hoc
import { withNamespaces } from "react-i18next";

function Page2({ t, tReady }) {
  // just to add some more here we load an additional namespace
  // common for "common" used texts and use that namespace
  // be prefixing it in front of the key "common:"
  if (!tReady) return <p>{t("common:loading")}</p>;

  return <h1>{t("Welcome on page2")}</h1>;
}

export default withNamespaces(["page2", "common"])(Page2);
