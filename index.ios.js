'use strict';

import React from 'react-native';
import CamPage from './CamPage';
import ControlsPage from './ControlsPage';

import {
    AppRegistry,
    TabBarIOS,
    Component
  } from 'react-native';

class HomeCare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'controls'
        };
    }

    render() {
        const controlsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABmElEQVRoQ+2Z0U0DQQxEJxVAB0AH0Akl0AElABVACXQEJUAF0AHI0p20RLnM2HtZmZPz7Th+nvHtOrfDRj67jXCAgbxNoDcdwENyMJCfCYDFHeMckoMVOKQIQW1aR4EIXZxDaDeFXDRHKSJ0sRQ50CS3tZ4B3AK4XOj4B4BXAE+ZFXkBcC8WaCCPYiztppCH5miH/QvAOQA7xd8Xkl8DsJPalLkSCrAQWoSQh+ZoQWjw9INqXM+wuy2eESRk8RbkG8CZaK3PIw+Efad4FQxZvAWx4X0Q/Gohpxx2FfxP3P7JbjB3AC4WgEwJe/yqT6zIsK8CIgriClMLm5OGLJ7xrhWyeEYQU8Zt8awgLu9a8H8BoXNWIA7taTeFXDRHKSJ0sefS6L7mlCKliKMDTWgNe8+gurc7QaThioS2u4wgoe0uIwi1wKn+wFj7HNkMSGi7y2it0HaXESS03WUFEepyh9DZW3vYD1VIixCwaI4CEbrYc82pfWSpwdSbgjJDctSMCEqkmpH5FZy9cot+huRg1ooWP/x7mwH5BdNhsTPGSyy2AAAAAElFTkSuQmCC';
        const camIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD2ElEQVRoQ+3Zi5HURhAG4L4IIAQTARCBfREAEdiOADsC7AhsIgAiACKwicAQAQ4BIoD6KPVV3+yMVrtCBXWlqdpCexr19P/onllxETdkXNwQHLED+d6U3BXZFdmIgd1aGxF7dthdkbOp2+jBXZEOsbcj4seIuBcRP0WE767reBsRHyLi34hw/Wb6vlqntYpI9kFEPJw+5yT0KiJ8Xq8BdS6QHyLicUT8MjGfADCMbR/MY70OCnk2VaNgDvOfR8TTiPj/VEZOBUKBJxHxW7PQnxHx9xmMiieWmHWIJSZwi8YpQCjwR6OARViCtdYM1mLRjxFxawoEhPUodHQsAcIKz6YCFpB9MPZyin5nYAXggFf4Brth2b/tsMb76Y+PJpXSdub/esxux4Cogb8mFbDFBnzs78C9mK7bxNwzpzeAwXQ7xP15Sto1IvxLIer8Pn3vBp0DUpNhH4mlZ9MKmLJYHRJItUaWuOwok+RQPFVUQ+KzneHamgejB8TDEslgmGClOshN+p6t8t4IhL/XZHOeTvbf4B4ncIYhPvtdawQtECD+mdojK2G35+lPU9AeEXlvDoh7c8/27gEqF1bT1ql6BaY+YCIlFN67yUrtPpDJfQsg1pYje91twSQQSpA1QbDVXA8HULD7nU1vibV6LTuthcT2aFPVlas1roFJIEB4WJBjIATdstiX7EsVDFCXCSRZPPDewOhZfKP2qznYQ3pj1H6TnF5zaePUWv7SOKq1DuSaqda6gY02RMraL3Jjs6DvxzbEUbxMp4K4clBb7LWQtLi5w1tuYJg0d83QZHTIkcK1RdvfDsqg135TGcWuxY06F1Xc0w6X2GEENG2q3Ys5ajKStzVQ5KCWRxsiltMSFhod3OouPjdvBEId5WZLVev2Rp3Hotad3RBrkLROdilHgx5bebTIedQ59nsC83bqPDX3jjriYZ+Vct7QeksOjRjLgxvWBWtHPeC5hwQWZYG0Jmvo/ZpAHijZyXVPCQdIawNTD6xdyY4B8RD2JFaP1Vhva8c8XUkCSwZCENOqDDC18qzHSsDOqrwESCZlUYnmDx8sqp22nQJEIYm4poJBHcmY79k2MfPVQtqICtZrD6xnK1IfJLPgdbOjjMUwd6w22iQApTSS6rHk5J/OpyhSk5CAxUmeCrkPVH35gNVaI+YiA/s+NXlzWRgppxKy+n+sJJWvgvLHz5L6qHOcrfKV0OKXDe0i5yrSSzaZri/osj5yvjqpL+jytdGp4A/mf00gq5NZE2AHsoa9LZ7dFdmC1TUxd0XWsLfFs7siW7C6JuauyBr2tnj2xijyGZrT8TNGmdBrAAAAAElFTkSuQmCC';

        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'cam'}
                    icon={{uri:camIcon, scale: 2}}
                    title='即時畫面'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'cam'
                        });
                    }}>
                    <CamPage />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'controls'}
                    icon={{uri:controlsIcon, scale: 2}}
                    title='即時控制'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'controls'
                        });
                    }}>
                    <ControlsPage />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('HomeCare', () => HomeCare);
