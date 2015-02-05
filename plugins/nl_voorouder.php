<?php

namespace Webtrees;

class nl_voorouder_plugin extends research_base_plugin {

	static function getPluginName() {
		return 'NL | Voorouder.nl';
	}

	static function createLink($fullname, $givn, $first, $middle, $prefix, $surn, $surname) {
		return $link = 'http://www.voorouder.nl/genealogie/search.php?mybool=AND&nr=50&showdeath=yes&mylastname=' . $surname . '&lnqualify=equals&myfirstname=' . $givn . '&fnqualify=contains';
	}

}
