$(document).foundation();

//**## NEM NEWS FEED ##**/
//Pulls twitter feed using twitter fetcher.
// Also automatically hyperlinks URLS and user mentions and hashtags.
//@nemcoin
var config1 = {
  "id": '474290838172749825',
  "domId": 'newsFeed',
  "maxTweets": 3,
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
		// $('#navclient').text($.t('sec'));
		// $('#navbuy').text($.t('nav.buy'));
		// $('#blog').text($.t('nav.blog'));
		// $('#test123').i18n();



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

});
