import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardAction,
  Chip,
} from '@material-ui/core'

import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

function Restaurant({ venues }) {
  return (
    <div className="restaurant-wrapper">
      <div className="restaurant-inner">
        {venues.map((venue, id) => (
          <Card>
            <CardMedia
              style={{ height: 350 }}
              image={venue.photo ? venue.photo.images.large.url : ''}
              title={venue.name}
            ></CardMedia>
            <CardContent>
              <Typography>{venue.name}</Typography>
              <Box>
                <Typography>Price</Typography>
                <Typography>{venue.price_level}</Typography>
              </Box>
              <Box>
                <Typography>Ranking</Typography>
                <Typography>{venue.ranking}</Typography>
              </Box>
              {venue?.cuisine?.map((name) => (
                <Chip key={name} size="small" label={name} />
              ))}
              {venue?.address && <Typography></Typography>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Restaurant
