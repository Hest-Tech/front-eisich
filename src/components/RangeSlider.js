import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';

import { handleRange, setRangeFilter } from '../actions/filters';

const useStyles = makeStyles({
    root: {
        width: 150,
    },
});
const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
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
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const RangeSlider = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.filters.range);

    const handleChange = (event, newValue) => {
        props.handleRange(newValue);
        props.setRangeFilter(newValue[0], newValue[1])
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <PrettoSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaLabel={value => value}
                getAriaValueText={value => value}
                defaultValue={50000}
                max={250000}
                min={0}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    handleRange: (range) => dispatch(handleRange(range)),
    setRangeFilter: (min, max) => dispatch(setRangeFilter(min, max))
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);