import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: COLORS.mediumGray, maxWidth: 640, margin: '0 auto', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        {description}
    </p>
  </>
)

export default SectionHeader
