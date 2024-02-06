import React from 'react'
import { Grid } from '@mui/material'
import DataCard from '../DataCard'
const DataRibbon = () => {
  return (
    <Grid>
        <h1>Data Ribbon</h1>
        <DataCard/>
        <DataCard/>
        <DataCard/>
        
    </Grid>
  )
}

export default DataRibbon