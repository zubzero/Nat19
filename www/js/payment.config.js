angular.module("woocommerce-api").constant("PAYMENT_CONFIG", {

	// WooCommerce supports a single main currency type(unless a custom plugin is used)
	// This info can be fetched from the API, but making such a call everytime is unnecessary
	// So it should be configured here
	// Note that both the woocommerce and paypal follow the currency types defined by ISO4217
	// For more info visit: http://www.xe.com/iso4217.php
	// It's fetched from MetaData factory dynamically now.
	//currency: "CHF",

    // For Cordova plugin, doesn't function in browser mode
    paypal: {
    	production_client_id: 'AfH1okelnw5UgDqqNhDOIAVttJxyBKaSHWkapq7H6q8jldD-JHbAV81cX8FVrA0D0TxJIlmSBE1bVZWr',
    	// sandbox_client_id: 'AX4uuPShGdklB-7cKfJ7NC3fsUzN_zbi3M66Nw4cc6HjGn6tO2dA-hRA3Iv__u_ayBW3-7kdT65uqVeP',

		config: {
		    /// If set to NO, the SDK will only support paying with PayPal, not with credit cards.
		    /// This applies only to single payments (via PayPalPaymentViewController).
		    /// Future payments (via PayPalFuturePaymentViewController) always use PayPal.
		    /// Defaults to YES
			// If this feature is enabled, camera access permission will be asked for,
			// this is necessary for the scan feature.
			// Don't be frightened by it, you can safely avoid at the cost of reduced functionality.
		    acceptCreditCards: true,
		    merchantPrivacyPolicyURL: "https://naturapp.store/aviso-de-privacidad/",
		    merchantUserAgreementURL: "https://naturapp.store/aviso-de-privacidad/",
		    /// For single payments, options for the shipping address.
		    /// - 0 - PayPalShippingAddressOptionNone: no shipping address applies.
		    /// - 1 - PayPalShippingAddressOptionProvided: shipping address will be provided by your app,
		    ///   in the shippingAddress property of PayPalPayment.
		    /// - 2 - PayPalShippingAddressOptionPayPal: user will choose from shipping addresses on file
		    ///   for their PayPal account.
		    /// - 3 - PayPalShippingAddressOptionBoth: user will choose from the shipping address provided by your app,
		    ///   in the shippingAddress property of PayPalPayment, plus the shipping addresses on file for the user's PayPal account.
		    /// Defaults to 0 (PayPalShippingAddressOptionNone).
		    payPalShippingAddressOption: 0

		    // for more options see js/paypal-mobile-js-helper.js
		},

		// Artifacts from a custom implementation
	    api_endpoint: 'https://api.sandbox.paypal.com/v1',
	    client_id: 'AfH1okelnw5UgDqqNhDOIAVttJxyBKaSHWkapq7H6q8jldD-JHbAV81cX8FVrA0D0TxJIlmSBE1bVZWr',
	    client_secret: 'EK_dsXizYDJcllf3RlOGHykvgjVhWez5Ho3W7EX2msKQ_x9ddH21ZDRhH9z-jFsHXH9NRBvp-IGLGnsQ'
	}

	// stripe: {
	// 	public_key: 'pk_test_SpHGZTSbthpOWvOK1w1xdNWz',
	// 	// Insecure, stripe api is powerful and this key can be used to cancel, refund payments by third parties if captured.
	// 	secret_key: 'sk_test_d2zrPxi0tNQ51PzYFSF1KfH3'
	// }

});
