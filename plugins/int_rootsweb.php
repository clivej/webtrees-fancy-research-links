<?php

namespace Webtrees;

class int_rootsweb_plugin extends research_base_plugin {

	static function getPluginName() {
		return 'INT | Rootsweb';
	}

	static function createLink($fullname, $givn, $first, $middle, $prefix, $surn, $surname) {
		return $link = 'http://worldconnect.rootsweb.ancestry.com/cgi-bin/igm.cgi?op=Search&lang=en&surname=' . $surname . '&stype=Exact&given=' . $givn . '&brange=0&drange=0&mrange=0&period=All&submit.x=Search';
	}

	static function encode_plus() {
		return true;
	}

}
