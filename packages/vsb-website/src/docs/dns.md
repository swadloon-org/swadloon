# DNS Migration from `he.net` to `vercel`

## Raw DNS Output

```txt
Raw AXFR output
; vasectomie-pierre-boucher.ca Dumped Tue Apr  6 11:25:56 2021
;
vasectomie-pierre-boucher.ca.	172800	IN	SOA	ns1.he.net. hostmaster.he.net. (
					2021031109	;serial
					86400		;refresh
					7200		;retry
					3600000		;expire
					86400	)	;minimum
autodiscover.vasectomie-pierre-boucher.ca.	3600	IN	CNAME	autodiscover.outlook.com.
mail.vasectomie-pierre-boucher.ca.	3600	IN	A	208.167.252.133
vasectomie-pierre-boucher.ca.	300	IN	A	104.198.14.52
vasectomie-pierre-boucher.ca.	3600	IN	MX	10 vasectomiepierreboucher-ca02e1c.mail.protection.outlook.com.
vasectomie-pierre-boucher.ca.	86400	IN	NS	ns1.he.net.
vasectomie-pierre-boucher.ca.	86400	IN	NS	ns2.he.net.
vasectomie-pierre-boucher.ca.	86400	IN	NS	ns3.he.net.
vasectomie-pierre-boucher.ca.	86400	IN	NS	ns4.he.net.
vasectomie-pierre-boucher.ca.	86400	IN	NS	ns5.he.net.
vasectomie-pierre-boucher.ca.	3600	IN	TXT	MS=ms81379911
vasectomie-pierre-boucher.ca.	3600	IN	TXT	"v=spf1 include:spf.protection.outlook.com -all"
www.vasectomie-pierre-boucher.ca.	3600	IN	CNAME	vsb-website-release.netlify.app.


DNS Trace looking for NS records (starting at .)
Temporarily disabled.
```

```txt
Raw AXFR output
; pb-medecin-aviation.ca Dumped Tue Apr  6 14:34:28 2021
;
pb-medecin-aviation.ca.	172800	IN	SOA	ns1.he.net. hostmaster.he.net. (
					2021031103	;serial
					86400		;refresh
					7200		;retry
					3600000		;expire
					86400	)	;minimum
autodiscover.pb-medecin-aviation.ca.	3600	IN	CNAME	autodiscover.outlook.com.
mail.pb-medecin-aviation.ca.	3600	IN	A	64.237.59.114
pb-medecin-aviation.ca.	300	IN	A	104.198.14.52
pb-medecin-aviation.ca.	3600	IN	MX	10 pbmedecinaviation-ca0e1e.mail.protection.outlook.com.
pb-medecin-aviation.ca.	86400	IN	NS	ns1.he.net.
pb-medecin-aviation.ca.	86400	IN	NS	ns2.he.net.
pb-medecin-aviation.ca.	86400	IN	NS	ns3.he.net.
pb-medecin-aviation.ca.	86400	IN	NS	ns4.he.net.
pb-medecin-aviation.ca.	86400	IN	NS	ns5.he.net.
pb-medecin-aviation.ca.	3600	IN	TXT	MS=ms88408943
pb-medecin-aviation.ca.	3600	IN	TXT	"v=spf1 include:spf.protection.outlook.com -all"
www.pb-medecin-aviation.ca.	300	IN	A	104.198.14.52


DNS Trace looking for NS records (starting at .)
Temporarily disabled.
```

### Verify that DNS Record are Set Correctly at Vercel

```bash
macbook-pro:~ phil$ dig MX vasectomie-pierre-boucher.ca @ns1.vercel-dns.com

# output
; <<>> DiG 9.10.6 <<>> MX vasectomie-pierre-boucher.ca @ns1.vercel-dns.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 50211
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1280
;; QUESTION SECTION:
;vasectomie-pierre-boucher.ca.	IN	MX

;; ANSWER SECTION:
vasectomie-pierre-boucher.ca. 60 IN	MX	10 vasectomiepierreboucher-ca02e1c.mail.protection.outlook.com.

;; AUTHORITY SECTION:
vasectomie-pierre-boucher.ca. 86400 IN	NS	ns2.vercel-dns.com.
vasectomie-pierre-boucher.ca. 86400 IN	NS	ns1.vercel-dns.com.

;; Query time: 35 msec
;; SERVER: 96.45.80.1#53(96.45.80.1)
;; WHEN: Tue Apr 06 16:13:01 EDT 2021
;; MSG SIZE  rcvd: 179

macbook-pro:~ phil$
```
