import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 50,
    left: 50,
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}))

const PrettoSlider = withStyles({
  root: {
    color: 'blue',
    height: 8,
    background: 'transparent'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider)

export default function CustomizedSlider({handleBoxSize, handleCount}) {
  const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography gutterBottom>{"Количество снизу"}</Typography>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={10}
                onChange={handleCount}
            />
            <div className={classes.margin} />
            <Typography gutterBottom>{"Размер"}</Typography>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={50}
                onChange={handleBoxSize}
            />
        </div>
    )
}
