import { Grid, List, ListItem, Typography } from '@mui/material'

const Menu = () => {
  const listItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #ccc'
  }

  return (
    <Grid container rowSpacing={2} sx={{ justifyContent: 'space-between', my: 0, mx: 'auto', width: 400 }}>
      <Grid item xs={12}>
        <Typography variant="h5">メニュー表</Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h5">各種在庫</Typography>
      </Grid>

      <Grid item xs={12}>
        <List>
          <ListItem style={listItemStyle}>
            カレーライス　<strong>売り切れ</strong>
          </ListItem>{' '}
          <ListItem style={listItemStyle}>
            カツカレー　<strong>売り切れ</strong>
          </ListItem>{' '}
          <ListItem style={listItemStyle}>
            チーズカレー　<strong>売り切れ</strong>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Menu
