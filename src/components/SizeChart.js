import React from 'react';
import Modal from 'react-modal';

// Custom styles for the authentication modal
const customStyles = {
    overlay: { zIndex: 1000 },
    content: {
        top: '5%',
        width: '70%'
    }
};

Modal.setAppElement('body');

const SizeChart = (props) => (
    <Modal
        style={customStyles}
        isOpen={props.isOpen}
        onRequestClose={props.toggleChartPopUp}
        id="login-overlay"
        className="modal-dialog"
    >
        <div className="modal-content">
            <div className="modal-header">
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    onClick={props.toggleChartPopUp}
                >
                    <span aria-hidden="true">×</span>
                </button>
                <h2>Size Chart</h2>
            </div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Tag size</th>
                        <th scope="col">US</th>
                        <th scope="col">UK</th>
                        <th scope="col">Bust</th>
                        <th scope="col">Hip</th>
                        <th scope="col">Shoulder</th>
                        <th scope="col">Sleeve</th>
                        <th scope="col">length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">S</th>
                        <td>4</td>
                        <td>6</td>
                        <td>92</td>
                        <td>97</td>
                        <td>37</td>
                        <td>45</td>
                        <td>84</td>
                    </tr>
                    <tr>
                        <th scope="row">M</th>
                        <td>6</td>
                        <td>8</td>
                        <td>97</td>
                        <td>102</td>
                        <td>38</td>
                        <td>46</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <th scope="row">L</th>
                        <td>8</td>
                        <td>10</td>
                        <td>102</td>
                        <td>107</td>
                        <td>39</td>
                        <td>47</td>
                        <td>86</td>
                    </tr>
                    <tr>
                        <th scope="row">XL</th>
                        <td>10</td>
                        <td>12</td>
                        <td>107</td>
                        <td>112</td>
                        <td>40</td>
                        <td>48</td>
                        <td>87</td>
                    </tr>
                    <tr>
                        <th scope="row">XXL</th>
                        <td>12</td>
                        <td>14</td>
                        <td>112</td>
                        <td>117</td>
                        <td>41</td>
                        <td>49</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <th scope="row">XXL</th>
                        <td>14</td>
                        <td>16</td>
                        <td>117</td>
                        <td>122</td>
                        <td>42</td>
                        <td>50</td>
                        <td>89</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Modal>
);

export default SizeChart;