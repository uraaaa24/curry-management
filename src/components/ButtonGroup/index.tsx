import { Button, Grid, Typography } from '@mui/material'

const ButtonGroup = () => {
  return (
    <Grid container rowSpacing={2} sx={{ justifyContent: 'space-between', my: 0, mx: 'auto', width: 400 }}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          操作
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="outlined">入荷</Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          注文
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">カレーライス</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">カツカレー</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">チーズカレー</Button>
      </Grid>
    </Grid>
  )
}

export default ButtonGroup
