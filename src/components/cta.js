import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Ha pedig még nem tetted volna meg, iratkozz fel hírlevelünkre, hogy az elsők között értesülhess hamarosan megjelenő szolgáltatásunkról."
    />
    <Button>Értesítést kérek!</Button>
  </div>
)

export default CallToAction
