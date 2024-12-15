import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ChararterCard({ chararter }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <Row>
        <Col className="animate__animated animate__fadeInUp">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={chararter.image}
              title="green iguana"
              style={{ 
                // width: '38%',
                height: '297px',
                objectFit: 'cover',
                marginLeft: '29%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {chararter.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap={!showFullDescription}>
                {chararter.description}
              </Typography>
              {chararter.description.length > 100 && (
                <Button size="small" onClick={() => setShowFullDescription(!showFullDescription)}>
                  {showFullDescription ? 'Leer menos' : 'Leer más'}
                </Button>
              )}
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </>
  );
}