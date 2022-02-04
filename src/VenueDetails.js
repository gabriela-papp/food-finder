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
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

function VenueDetails({ venue, selected, refProp }) {
  return (
    <Card>
      <CardMedia
        style={{ height: 200 }}
        image={
          venue.photo
            ? venue.photo.images.large.url
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE5kYdm8oHHmrcZhvQI5iH2NtuS2L2Fd1c4ySD4AY2n1TJ92i0CxOoMvbLXiOKlUlvCc&usqp=CAU'
        }
        title={venue.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {venue.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(venue.rating)} read-only />
          <Typography> out of {venue.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Price</Typography>
          <Typography>{venue.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Ranking</Typography>
          <Typography>{venue.ranking}</Typography>
        </Box>
        {venue?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} />
        ))}
        {venue?.address && (
          <Typography gutterBottom variant="body2">
            <LocationOnOutlinedIcon />
            {venue.address}
          </Typography>
        )}
        {venue?.phone && (
          <Typography gutterBottom variant="body2">
            <PhoneIcon />
            {venue.phone}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default VenueDetails
