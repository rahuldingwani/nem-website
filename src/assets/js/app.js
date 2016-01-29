$(document).foundation();

// smoothScroll.init();
gumshoe.init({
  offset: 10, // Distance in pixels to offset calculations
});

//parrallax scrolling
var s = skrollr.init(/*other stuff*/);
// The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,
    //The easing function to use.
    easing: 'sqrt',
    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 1.5,
    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        // return 500;
        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        // return Math.abs(currentTop - targetTop) * 10;
    },
    //By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
    //If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
    //The following will all work (if the user is on the correct page):
    //http://example.com/currentPage/#foo
    //http://example.com/currentDir/currentPage.html?foo=bar#foo
    ///?foo=bar#foo
    complexLinks: false,
    //This event is triggered right before we jump/animate to a new hash.
    // change: function(newHash, newTopPosition) {
    //     //Do stuff
    // },
    //Add hash link (e.g. `#foo`) to URL or not.
    updateUrl: true //defaults to `true`.
});

// fixes bug that messed up Foundation Reveal while skrollr was active.
// This could make more bugs though so let's see....
var div = document.getElementById("body");
div.style.height = "0px";

// Make elements stick function calls
$(document).ready(function(){
  $("#sticker").sticky({
    topSpacing:20,
    bottomSpacing: 800
  });
});

// remove stats section if stats are null
if ($('#data1').is(':empty')) {
    $('#stats').remove();
}

// //**## NEM NEWS FEED ##**/
// //Pulls twitter feed using twitter fetcher.
// // Also automatically hyperlinks URLS and user mentions and hashtags.
// //@nemcoin
var config1 = {
  "id": '474290838172749825',
  "domId": 'newsFeed',
  "maxTweets": 8,
  "enableLinks": true,
  "showUser": true,
  "showImages": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config1);


$.i18n.init({
		ns: { namespaces: ['en', 'cn', 'ja', 'fi'], defaultNs: 'en'},
		useLocalStorage: false,
		fallbackLng: 'en',
    resGetPath: 'assets/locales/__lng__.json',
		debug: true
	}, function(t) {
		// $('#add').text($.t('ns.common:add'));
		// $('#appname').text($.t('app.name'));
		// $('#appclient').text($.t('app.client'));

		<!-- OURNEM HOMEPAGE -->



		<!-- NAVIGATION -->
    $('#navClient').text($.t('navClient'));
    $('#navBuy').text($.t('navBuy'));
    $('#navSupport').text($.t('navSupport'));
    $('#navSupportFaq').text($.t('navSupportFaq'));
    $('#navSupportTutorial').text($.t('navSupportTutorial'));
    $('#navSupportForum').text($.t('navSupportForum'));
    $('#navUpdates').text($.t('navUpdates'));
    $('#navBlog').text($.t('navBlog'));
    $('#navLang').i18n();

    <!-- ABOUT SECTION -->
    $('.multisigTitle').text($.t('multisigTitle'));
    $('.appsTitle').text($.t('appsTitle'));
    $('.reputationTitle').text($.t('reputationTitle'));
    $('.messagingTitle').text($.t('messagingTitle'));
    $('.architectureTitle').text($.t('architectureTitle'));
    $('.harvestingTitle').text($.t('harvestingTitle'));
    $('.delegatedTitle').text($.t('delegatedTitle'));
    $('.mosaicTitle').text($.t('mosaicTitle'));
    $('.videoTitle').text($.t('videoTitle'));
    $('.nccTitle').text($.t('nccTitle'));
    $('.nisTitle').text($.t('nisTitle'));
    $('.consensusTitle').text($.t('consensusTitle'));
    $('.newcodeTitle').text($.t('newcodeTitle'));
    $('.blocktimesTitle').text($.t('blocktimesTitle'));
    $('.xemTitle').text($.t('xemTitle'));
    $('.namespaceTitle').text($.t('namespaceTitle'));
    $('.spamTitle').text($.t('spamTitle'));

    $('.multisig').text($.t('multisig'));
    $('.multisig2').text($.t('multisig2'));
    $('.apps').text($.t('apps'));
    $('.reputation').text($.t('reputation'));
    $('.messaging').text($.t('messaging'));
    $('.architecture').text($.t('architecture'));
    $('.harvesting').text($.t('harvesting'));
    $('.delegated').text($.t('delegated'));
    $('.mosaic').text($.t('mosaic'));
    $('.mosaic2').text($.t('mosaic2'));
    $('.ncc').text($.t('ncc'));
    $('.nis').text($.t('nis'));
    $('.consensus').text($.t('consensus'));
    $('.consensus2').text($.t('consensus2'));
    $('.newcode').text($.t('newcode'));
    $('.blocktimes').text($.t('blocktimes'));
    $('.xem').text($.t('xem'));
    $('.namespace').text($.t('namespace'));
    $('.namespace2').text($.t('namespace2'));
    $('.namespace3').text($.t('namespace3'));
    $('.spam').text($.t('spam'));

    <!-- STATS SECTION -->
    $('#dataText1').text($.t('data1'));
    $('#dataText2').text($.t('data2'));
    $('#dataText3').text($.t('data3'));
    $('#dataText4').text($.t('data4'));


    <!-- CLIENT SECTION -->
    $('#clientHeader').text($.t('header'));
    $('#clientContent').i18n();
    $('#clientClick').text($.t('click'));
    $('#clientClickAlt').text($.t('clickAlt'));
    $('#clientHelp').i18n();
    $('#clientHelpAlt').i18n();

    $('#clientHeader2').text($.t('header2'));
    $('#clientAbout').text($.t('about2'));
    $('#clientHelp2').i18n();

    <!-- BUY SECTION -->
    $('#buyHeader').text($.t('buyHeader'));
    $('#buyHere').text($.t('buyHere'));
    $('#xemFaucet').text($.t('xemFaucet'));
    $('#xemCash').text($.t('xemCash'));

    <!-- HELP SECTION -->
    $('#helpHeader').text($.t('helpHeader'));
    $('#faq').text($.t('faq'));
    $('#faqAlt').text($.t('faqAlt'));
    $('#forum').text($.t('forum'));
    $('#forumAlt').text($.t('forumAlt'));
    $('#forumAlt2').text($.t('forumAlt2'));
    $('#tutorials').text($.t('tutorials'));
    $('#tutorialsAlt').text($.t('tutorialsAlt'));
    $('#chat').text($.t('chat'));
    $('#chatAlt').text($.t('chatAlt'));
    $('#chatAlt2').text($.t('chatAlt2'));

    <!-- FOOTER SECTION -->
    $('#footerText').text($.t('footerText'));
    $('#resources').text($.t('resources'));
    $('#articles').text($.t('articles'));
    $('#posts').text($.t('posts'));

    <!-- INSTALL PAGE -->
    $('.getClient').text($.t('getClient'));
    $('#installers').text($.t('installers'));
    $('#standalone').text($.t('standalone'));
    $('#installOptions').text($.t('installOptions'));
    $('#backup').text($.t('backup'));
    $('#ifIssues').i18n();
    $('#or').text($.t('or'));
    $('#sisterSite').i18n();

    <!-- FAQ -->
    $('.faqHeader').text($.t('faqBanner'));

    <!-- GENERIC -->
    $('.coming').text($.t('coming'));
    $('.more').text($.t('more'));
    $('.getXem').text($.t('getXem'));
});
