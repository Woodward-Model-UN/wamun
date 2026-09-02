(function () {
  // ---------- ambient background motifs (static — no scroll-linked motion) ----------
  var globe =
    '<svg class="motif motif-globe" viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true">' +
      '<circle cx="200" cy="200" r="160"/>' +
      '<ellipse cx="200" cy="200" rx="112" ry="160"/>' +
      '<ellipse cx="200" cy="200" rx="58" ry="160"/>' +
      '<line x1="200" y1="40" x2="200" y2="360"/>' +
      '<line x1="40" y1="200" x2="360" y2="200"/>' +
      '<line x1="49.8" y1="145" x2="350.2" y2="145"/>' +
      '<line x1="49.8" y1="255" x2="350.2" y2="255"/>' +
      '<line x1="79.3" y1="95" x2="320.7" y2="95"/>' +
      '<line x1="79.3" y1="305" x2="320.7" y2="305"/>' +
      '<line x1="122.5" y1="60" x2="277.5" y2="60"/>' +
      '<line x1="122.5" y1="340" x2="277.5" y2="340"/>' +
    '</svg>';

  var map =
    '<svg class="motif motif-map" viewBox="0 0 420 320" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
      '<path d="M22 96 L74 58 L142 66 L176 44 L214 74 L196 122 L138 140 L86 128 Z"/>' +
      '<path d="M138 140 L196 122 L232 158 L214 214 L166 246 L128 214 L118 170 Z"/>' +
      '<path d="M214 74 L268 52 L322 78 L340 126 L296 150 L232 158 L196 122 Z"/>' +
      '<path d="M296 150 L340 126 L392 150 L398 202 L344 226 L296 200 Z"/>' +
      '<path d="M166 246 L214 214 L262 240 L250 288 L196 296 Z"/>' +
      '<path d="M22 96 L86 128 L74 176 L28 168 Z"/>' +
      '<circle cx="176" cy="44" r="3" fill="currentColor" stroke="none"/>' +
      '<circle cx="296" cy="150" r="3" fill="currentColor" stroke="none"/>' +
      '<circle cx="128" cy="214" r="3" fill="currentColor" stroke="none"/>' +
      '<circle cx="344" cy="226" r="3" fill="currentColor" stroke="none"/>' +
    '</svg>';

  var delegates =
    '<svg class="motif motif-delegates" viewBox="0 0 460 220" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">' +
      '<circle cx="70" cy="62" r="20"/><path d="M36 130 q34 -42 68 0"/>' +
      '<circle cx="176" cy="52" r="22"/><path d="M138 128 q38 -48 76 0"/>' +
      '<circle cx="286" cy="58" r="20"/><path d="M252 130 q34 -44 68 0"/>' +
      '<circle cx="392" cy="66" r="18"/><path d="M362 132 q30 -38 60 0"/>' +
      '<line x1="8" y1="140" x2="452" y2="140"/>' +
      '<path d="M8 140 L8 206 L452 206 L452 140"/>' +
      '<rect x="42" y="150" width="56" height="22"/>' +
      '<rect x="148" y="150" width="56" height="22"/>' +
      '<rect x="258" y="150" width="56" height="22"/>' +
      '<rect x="364" y="150" width="56" height="22"/>' +
    '</svg>';

  var grid =
    '<svg class="motif motif-red motif-grid" viewBox="0 0 200 200" aria-hidden="true">' +
      '<defs><pattern id="dg" width="20" height="20" patternUnits="userSpaceOnUse">' +
      '<circle cx="2" cy="2" r="1.8" fill="currentColor"/></pattern></defs>' +
      '<rect width="200" height="200" fill="url(#dg)"/>' +
    '</svg>';

  var layer = document.createElement('div');
  layer.className = 'bg-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = globe + map + delegates + grid;
  document.body.insertBefore(layer, document.body.firstChild);
})();
