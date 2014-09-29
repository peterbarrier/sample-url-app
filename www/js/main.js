'use strict';
/* jshint strict: true, -W097 */
/* global admobAd, alert */


//AdMob Keys
/*
    Visit to https://apps.admob.com/ to obtain Ad Unit IDs for displaying Interstitial and Banner ads 
    Create your App entry and ad unit under the Monetize panel
*/
var admob_interstitial_key = 'ADD_YOUR_AD-UNIT-ID_HERE';//Interstitial Ads
var admob_banner_key = 'ADD_YOUR_AD-UNIT-ID_HERE';//Banner Ads 

/*
    Function: onReceiveFail
    Parameter: message - calback message
    Description: callback fail method
*/
function onReceiveFail(message) {
    alert("load fail: " + message.type + "  " + message.data);
}

/*
    Function: showInterstitial
    Parameter: none
    Description: showInterstitial Ad; executed after init and cache Interstitial
*/
function showInterstitial() {
    admobAd.isInterstitialReady(function (isReady) {
        if (isReady) {
            admobAd.showInterstitial();
        }
    });
}

/*
Function: onInterstitialReceive
Parameter: message - callback message
Description: callback success method
*/
function onInterstitialReceive(message) {
    alert("onMInterstitialReceive ,you can show it now");
    showInterstitial();
}

/*
    Function: onDocLoad()
    Parameter: none
    Description: show the Banner Ad [initBanner(...) then showBanner(...)] or interstitial Ad [initInterstitial(...) then cacheInterstitial() then showInterstitial()]; 
*/
function onDocLoad() {
    //show Banner ad
    //admobAd.initBanner(admob_banner_key, admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);//create admob banner
    //admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);
    
    //show Interstitial ad
    admobAd.initInterstitial(admob_interstitial_key);//create Interstitial ad
    document.addEventListener(admobAd.AdEvent.onInterstitialReceive, onInterstitialReceive, false);
    document.addEventListener(admobAd.AdEvent.onInterstitialFailedReceive, onReceiveFail, false);
    
    admobAd.cacheInterstitial();// load admob Interstitial
}