import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styles } from '../ItemListContainer/styles';

export default function MediaCard({ info }) {
  return (
    <Card sx={styles.rootContainer}>
      <CardMedia
        component="img"
        height="140"
        image= {info.imagen}
        alt="green iguana"
      />
      <CardContent sx={styles.boxContainer}>
        <Typography gutterBottom variant="h5" component="div">
          {info.personaje}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.apodo}
        </Typography>
      </CardContent>
      <CardActions sx={styles.bottonContainer}>
        <Button size="small">Mas Info</Button>
      </CardActions>
    </Card>
  );
}
