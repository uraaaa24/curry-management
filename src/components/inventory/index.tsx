import { Grid, List, ListItem, Typography } from '@mui/material'

const Inventory = () => {
  const listItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #ccc'
  }

  return (
    <Grid container rowSpacing={2} sx={{ justifyContent: 'space-between', my: 0, mx: 'auto', width: 400 }}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h5">各種在庫</Typography>
      </Grid>

      <Grid item xs={12}>
        <List>
          <ListItem style={listItemStyle}>カレールー: 個</ListItem>
          <ListItem style={listItemStyle}>とんかつ: 個</ListItem>
          <ListItem style={listItemStyle}>チーズ: 個</ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Inventory
