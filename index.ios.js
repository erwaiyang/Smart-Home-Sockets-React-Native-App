'use strict';

import React from 'react-native';
import CamPage from './CamPage';
import FeaturedPage from './FeaturedPage';

import {
    AppRegistry,
    TabBarIOS,
    Component
  } from 'react-native';

class HomeCare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        const featuredIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD8UlEQVRoQ92a/ZFNQRDFz0aACBABIkAEiAARIAJEgAjYCNgIEAEiQASIgPpVzdnqHfe+6blvZp/SVfvHvjt3pk93n/6Y9440Xz6VI27MPOpo5uaS7kp6W864J+ndrPNmA0HxO0X5kwJsCpaZQK5I+lppfVXStxlIZgJ5JumpJDyB4Jnnkvh8uMwEgjfwCtxA4ArewCvDZRYQk/x7AYPigLhcgA0n/SwgJnkMpRhqAB0qM4BEkl+S9LNoHD8fTvoZQGz5Y0kPKrO/kXR/BulnADHJb0v6UAG5Jen9DNKPBrJE8poLU0g/GgjWxupPJL1cYfNjSS9KfRlG+pFA1khe47ko6Uf5cBjpRwLBA48kLZG8BmPSv5KEh/aWkUCwMtZeInmtqElPaiZF7y0tIDfDCYQOf5brRXH+BwD/x0reUs6k/xxqDcD438Ka2GR+XNsUIBCOkEBqZVvK1M8fSiJsMkKNeZ1ZuLImgjwGSJwZ6neiBVrWipbN6mdPev0ur7MmRkg84wQgbEbhulZcTOrMWjWr8Oh1eJMUju5fSPmRI84kHEqbQcP3Lwozjmea0wxZk93FCgAAwztu+g4NCuvjBfdvZ4ruUtaC/IC4UDII6fTQYABB10Bm/FXAnJlp1tIvL7CQQYjswJQX0+J5egddAAEY0juG/kuXXXWkTgKk1uGTXcMiKE2KPiX1WnS0CqK5wgyBwCHaivMQapsbz2bbkwHiLEa2MDC8M1PwgkmdunnJAkFpNsZCM5NATWoiIFXTeoAABuJRPAEzOgmwN1dGVHcyE41lOsH0AgEMVuMAMlrK7ckY9KxPZgJUV8rfAgS9uGHnsJEX0x6TMVL3zf0WIHHCi9c9ScOvLttr3y1AbDmaNbwyUvAGzWu3p7cA8Ug7kh82hvfuHoG3ADE/MiNtr7c286QXSIzj3nezoH6XhV3861XGFmNyJM+3hDUeZ+kG6pvHpfdZwyTYxZNeIFl+4Dlamvqqh/fh1q4a4XrSxZNeIBl+xI4Vi3vSdK8GiF2dtK+KuupJD5AWP2gtCCOHHOFHf+brHJ7TN/kCgRAC0NJ3it086QGyix8OI8DSJ+1q9mLziXccbpEv3TzpAbLED6zPHO3CyNwAiFafBGD285xDGDGDOxl086QHSOQHB0cy0+hh6UxWipbHEIQbDShi73i8TfMkCyTyg7To8dNk3ucrZ/bGi3Uy8C8mUvUkCyT+FMMWhcwokJ4ZGkUHL+CR+jYxVU+yQMwPdIHMeGDti5xWkWw9xzjsz/CGpOpJFohvIfkVA1xokbmlbOs54caZ/FqiefHAZlkgrMX1o8KoBcTPOZM60zRcD5Ds4QdZ998A+QPKofBTmPvfsQAAAABJRU5ErkJggg==';
        const camIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD2ElEQVRoQ+3Zi5HURhAG4L4IIAQTARCBfREAEdiOADsC7AhsIgAiACKwicAQAQ4BIoD6KPVV3+yMVrtCBXWlqdpCexr19P/onllxETdkXNwQHLED+d6U3BXZFdmIgd1aGxF7dthdkbOp2+jBXZEOsbcj4seIuBcRP0WE767reBsRHyLi34hw/Wb6vlqntYpI9kFEPJw+5yT0KiJ8Xq8BdS6QHyLicUT8MjGfADCMbR/MY70OCnk2VaNgDvOfR8TTiPj/VEZOBUKBJxHxW7PQnxHx9xmMiieWmHWIJSZwi8YpQCjwR6OARViCtdYM1mLRjxFxawoEhPUodHQsAcIKz6YCFpB9MPZyin5nYAXggFf4Brth2b/tsMb76Y+PJpXSdub/esxux4Cogb8mFbDFBnzs78C9mK7bxNwzpzeAwXQ7xP15Sto1IvxLIer8Pn3vBp0DUpNhH4mlZ9MKmLJYHRJItUaWuOwok+RQPFVUQ+KzneHamgejB8TDEslgmGClOshN+p6t8t4IhL/XZHOeTvbf4B4ncIYhPvtdawQtECD+mdojK2G35+lPU9AeEXlvDoh7c8/27gEqF1bT1ql6BaY+YCIlFN67yUrtPpDJfQsg1pYje91twSQQSpA1QbDVXA8HULD7nU1vibV6LTuthcT2aFPVlas1roFJIEB4WJBjIATdstiX7EsVDFCXCSRZPPDewOhZfKP2qznYQ3pj1H6TnF5zaePUWv7SOKq1DuSaqda6gY02RMraL3Jjs6DvxzbEUbxMp4K4clBb7LWQtLi5w1tuYJg0d83QZHTIkcK1RdvfDsqg135TGcWuxY06F1Xc0w6X2GEENG2q3Ys5ajKStzVQ5KCWRxsiltMSFhod3OouPjdvBEId5WZLVev2Rp3Hotad3RBrkLROdilHgx5bebTIedQ59nsC83bqPDX3jjriYZ+Vct7QeksOjRjLgxvWBWtHPeC5hwQWZYG0Jmvo/ZpAHijZyXVPCQdIawNTD6xdyY4B8RD2JFaP1Vhva8c8XUkCSwZCENOqDDC18qzHSsDOqrwESCZlUYnmDx8sqp22nQJEIYm4poJBHcmY79k2MfPVQtqICtZrD6xnK1IfJLPgdbOjjMUwd6w22iQApTSS6rHk5J/OpyhSk5CAxUmeCrkPVH35gNVaI+YiA/s+NXlzWRgppxKy+n+sJJWvgvLHz5L6qHOcrfKV0OKXDe0i5yrSSzaZri/osj5yvjqpL+jytdGp4A/mf00gq5NZE2AHsoa9LZ7dFdmC1TUxd0XWsLfFs7siW7C6JuauyBr2tnj2xijyGZrT8TNGmdBrAAAAAElFTkSuQmCC';

        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'cam'}
                    icon={{uri:camIcon, scale: 2}}
                    title='即時監控'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'cam'
                        });
                    }}>
                    <CamPage />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={{uri:featuredIcon, scale: 2}}
                    title='特色'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <FeaturedPage />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('HomeCare', () => HomeCare);
