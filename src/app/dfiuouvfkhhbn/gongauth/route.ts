const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex, nofollow">
<title>Gong OAuth forwarder</title>
</head>
<body>
<p>Completing authorization&hellip; if this page doesn't redirect automatically, <a id="fallback" href="#">click here</a>.</p>
<script>
  // Forwards a Gong OAuth redirect (which must be https) to OpenCode's local
  // loopback OAuth callback (which must be http://127.0.0.1). Gong's MCP
  // server integration form requires an https, publicly-reachable redirect
  // URI and won't accept http://127.0.0.1 directly. This page is registered
  // as that redirect URI instead, and its only job is to bounce the browser
  // (running on the same machine as OpenCode) on to the real local listener,
  // carrying over the same query string (code, state, etc.) untouched.
  //
  // IMPORTANT: OpenCode does NOT always listen on port 19876. It derives the
  // local listener's port and path by parsing oauth.redirectUri as a URL
  // (see McpOAuthCallback in the opencode source). Since this page's own URL
  // has no explicit port and uses https, that parsing defaults to port 443
  // (https's default port) -- NOT 19876, which only applies when redirectUri
  // is left unset entirely. If oauth.redirectUri in opencode.json ever
  // changes to a URL with an explicit port, update CALLBACK_PORT to match.
  var CALLBACK_PORT = 443;

  // Mirrors this page's own path rather than hardcoding it, since OpenCode
  // derives the expected local path the same way (from the redirectUri's
  // pathname) -- so whatever path this file is deployed at is automatically
  // correct.
  var target = "http://127.0.0.1:" + CALLBACK_PORT + window.location.pathname
    + window.location.search
    + window.location.hash;

  document.getElementById("fallback").href = target;

  window.location.replace(target);
</script>
</body>
</html>
`;

export function GET() {
  return new Response(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
