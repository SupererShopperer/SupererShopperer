import React, { Component } from 'react';
import {
    CartComponent,
    ProductComponent,
    CheckoutButtonComponent,
    cartLocalization,
} from 'react-shopping-cart';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;

const iPadCaseLocalization = {
    color: 'Color',
    iPadCase: 'iPad case',
    red: 'Red',
    green: 'Green',
    yellow: 'Yellow',
    USD: '$',
};

const iPadPropertiesWithAdditionalCostLocalization = {
    yellow: 'Yellow (+(cost)(localizedCurrency))',
};

class 