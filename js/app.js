
// ════════════════════════════════════════════════════════════
// 1. DATEN – Affiliate-Links
// ════════════════════════════════════════════════════════════

const EXTERNAL_LINKS = {

  SOCIAL: {
    PINTEREST: "https://de.pinterest.com/UpgradeYourHomeFinds/",
    TIKTOK: "",
  },


  AFFILIATE_ALLTAGSHELFER: {
    REINIGUNGSKNETE: "https://www.amazon.de/STIKKI-Reinigungsknete-Handy-Kopfh%C3%B6rer-R%C3%BCckstandsfreie-Schwarz-Wei%C3%9F/dp/B08R6FK6T5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XMWOQ6NEHY69&dib=eyJ2IjoiMSJ9.e3XDf2PSGvSIZV8m_B7dtcJxKenK9LrkDTWwRddpP_gtu-mTY83NNhFt4qWS4zUc6q1dWAzMVxIv9wniFNKaBZOEdxyXxvDP2rL_eiqIoj-qA_R9s0BWf3CaS0kNH1YQv52cUcLXV-AV3R7LO4HW2cKB2aZpgSVy6eH9KYgNQ7GIlSoVqcH32xVulneUa0n2_m3sj-sGpCXeeC-dkgnb8PJwXVNn542D-c70fKECGbt-E0iztPzN146nyymH0mUILjaGAvT-DKn7vMLemQkqsXmnHTnMij5M2hGAoytoCW0.JLFl190grd8ac9-3Oz-SG3YHfp5kAkz_cttEOPFA4X8&dib_tag=se&keywords=alltagshelfer&qid=1780906599&sprefix=alltagshelfer%2Caps%2C141&sr=8-1&linkCode=ll2&tag=upgradeyou07d-21&linkId=71f1ff03927a606b44c96e86a1262caa&ref_=as_li_ss_tl",
    FUSSELROLLE: "https://www.amazon.de/ACE2ACE-Tierhaarentferner-Fusselroller-Wiederverwendbar-Fusselb%C3%BCrste/dp/B0819XVK92?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XMWOQ6NEHY69&dib=eyJ2IjoiMSJ9.e3XDf2PSGvSIZV8m_B7dtcJxKenK9LrkDTWwRddpP_gtu-mTY83NNhFt4qWS4zUc6q1dWAzMVxIv9wniFNKaBZOEdxyXxvDP2rL_eiqIoj-qA_R9s0BWf3CaS0kNH1YQv52cUcLXV-AV3R7LO4HW2cKB2aZpgSVy6eH9KYgNQ7GIlSoVqcH32xVulneUa0n2_m3sj-sGpCXeeC-dkgnb8PJwXVNn542D-c70fKECGbt-E0iztPzN146nyymH0mUILjaGAvT-DKn7vMLemQkqsXmnHTnMij5M2hGAoytoCW0.JLFl190grd8ac9-3Oz-SG3YHfp5kAkz_cttEOPFA4X8&dib_tag=se&keywords=alltagshelfer&qid=1780906599&sprefix=alltagshelfer%2Caps%2C141&sr=8-7&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=26bf5b1235ba5c0202d9fe0932306a0b&ref_=as_li_ss_tl",
    RUECKENKRATZER: "https://www.amazon.de/Teleskop-R%C3%BCckenkratzer-mit-abnehmbaren-Kratzk%C3%B6pfen-Vatertagsgeschenk/dp/B0D7CFBKX2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XMWOQ6NEHY69&dib=eyJ2IjoiMSJ9.e3XDf2PSGvSIZV8m_B7dtcJxKenK9LrkDTWwRddpP_gtu-mTY83NNhFt4qWS4zUc6q1dWAzMVxIv9wniFNKaBZOEdxyXxvDP2rL_eiqIoj-qA_R9s0BWf3CaS0kNH1YQO-A64ORbmftIF9H1tuPA651H42LHjDL1xcw03xdHS_aIlSoVqcH32xVulneUa0n2_m3sj-sGpCXeeC-dkgnb8PJwXVNn542D-c70fKECGbt-E0iztPzN146nyymH0mUILjaGAvT-DKn7vMLemQkqsYrt5ok2yBQSXFTSNCDcumU.jvCyHA0AHGIuaCE2RCbSqb9oHWb4lTT7d_rPcGIbp4U&dib_tag=se&keywords=alltagshelfer&qid=1780907185&sprefix=alltagshelfer%2Caps%2C141&sr=8-5&xpid=qMVMCEtsjFxQW&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=82bf04452efffc4e2fffd666e225604d&ref_=as_li_ss_tl",
    NOTFALLHAMMERAUTO: "https://www.amazon.de/SafePro-Notfallhammer-Auto-Gurtschneider-Lebensrettender/dp/B0FMSX1QNV?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XMWOQ6NEHY69&dib=eyJ2IjoiMSJ9.e3XDf2PSGvSIZV8m_B7dtcJxKenK9LrkDTWwRddpP_gtu-mTY83NNhFt4qWS4zUc6q1dWAzMVxIv9wniFNKaBZOEdxyXxvDP2rL_eiqIoj-qA_R9s0BWf3CaS0kNH1YQO-A64ORbmftIF9H1tuPA651H42LHjDL1xcw03xdHS_aIlSoVqcH32xVulneUa0n2_m3sj-sGpCXeeC-dkgnb8PJwXVNn542D-c70fKECGbt-E0iztPzN146nyymH0mUILjaGAvT-DKn7vMLemQkqsYrt5ok2yBQSXFTSNCDcumU.jvCyHA0AHGIuaCE2RCbSqb9oHWb4lTT7d_rPcGIbp4U&dib_tag=se&keywords=alltagshelfer&qid=1780907185&sprefix=alltagshelfer%2Caps%2C141&sr=8-3-spons&xpid=qMVMCEtsjFxQW&aref=FxrCk95au2&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=8dd2c2a1f35d5e3af8851310ac9103ab&ref_=as_li_ss_tl",
    WISCHER: "https://www.amazon.de/Wischer-mit-Spr%C3%BChfunktion-Spr%C3%BChwischer-Bodenwischer/dp/B0DHGH6TRR?crid=P10E739LT6A2&dib=eyJ2IjoiMSJ9.eK2v1zGk82a498i9wkf6lPCw1VqDG_cCY8c8LQWwvGn_wx2l3dFx6FPhej1xZgScDq2DsDXYffc_AMaLxO8e_2yK3jdcqhyPFmrMoYR3j0VCVRYMJPgABaThDXQVWz8II68Y9pIyfriwq9UDBNS1o_fxP258FR9qZl1rexXpAP2sFs1HGExaHhG-bOk12sHqH5KP5eEbAfMta5O_ZK_Oofe4OeF_8AwdUG4snxirBH5W8utPfC_sx_VQwCd-h2yPKmjHyhG3Zbdvk_p_76S42Vfwj7EaAlhZyLjs4bAJb8Y.GTRHgq0tCVFfTibVb2uGVSp5dbcMxyo04DyaZj4ir84&dib_tag=se&keywords=alltagshelfer%2Bhaushalt&qid=1781163455&sprefix=alltagshelfer%2Bhaus%2Caps%2C102&sr=8-2-spons&aref=cgOB0ukL7j&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=ee5e18315a16c4b8982f88284683d9f8&ref_=as_li_ss_tl",
    GREIFZANGE: "https://www.amazon.de/91cm-Greifzange-f%C3%BCr-Senioren-Ergonomischer/dp/B0D3F6T937?crid=P10E739LT6A2&dib=eyJ2IjoiMSJ9.eK2v1zGk82a498i9wkf6lPCw1VqDG_cCY8c8LQWwvGn_wx2l3dFx6FPhej1xZgScDq2DsDXYffc_AMaLxO8e_2yK3jdcqhyPFmrMoYR3j0VCVRYMJPgABaThDXQVWz8II68Y9pIyfriwq9UDBNS1o_fxP258FR9qZl1rexXpAP2sFs1HGExaHhG-bOk12sHqH5KP5eEbAfMta5O_ZK_Oofe4OeF_8AwdUG4snxirBH5W8utPfC_sx_VQwCd-h2yPKmjHyhG3Zbdvk_p_76S42Vfwj7EaAlhZyLjs4bAJb8Y.GTRHgq0tCVFfTibVb2uGVSp5dbcMxyo04DyaZj4ir84&dib_tag=se&keywords=alltagshelfer%2Bhaushalt&qid=1781163455&sprefix=alltagshelfer%2Bhaus%2Caps%2C102&sr=8-58&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=967720433a8f6a2c9466fd10ac9b76e2&ref_=as_li_ss_tl",
  },


  AFFILIATE_BESTSELLER: {
    AUFBEWAHRUNGSBOXEN: "https://www.amazon.de/LYLIDIA-Aufbewahrungsbox-Aufbewahrungskorb-Kunststoffbox-K%C3%BCchenschrank/dp/B0FZJ9B7GC?content-id=amzn1.sym.1a8d4769-1212-4370-ad2f-b9a890afd03c%3Aamzn1.sym.1a8d4769-1212-4370-ad2f-b9a890afd03c&crid=3M5NYDCQ8J2H1&cv_ct_cx=badezimmer%2Borganizer&keywords=badezimmer%2Borganizer&pd_rd_i=B0FZJ9B7GC&pd_rd_r=9a9a7690-399f-4a81-afa8-248546fa8858&pd_rd_w=5QDbN&pd_rd_wg=xGT1h&pf_rd_p=1a8d4769-1212-4370-ad2f-b9a890afd03c&pf_rd_r=1FK6FFTBND6HTC0JQQWZ&qid=1779276641&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=badezimmer%2B%2Caps%2C141&sr=1-50-bc4c2f54-4b59-466b-9c0b-0dbd8545d08f-spons&xpid=PHqkrR9VWE_IN&aref=k4HNBQTyKX&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=8bf2caf9855e789a7e01f57090e7f6ef&ref_=as_li_ss_tl",
    ULTRASCHALLREINIGUNGSGERAET: "https://www.amazon.de/mfa-Ultraschallreinigungsger%C3%A4t-Ultraschallreiniger-Schmuckreiniger-Ultraschallger%C3%A4t/dp/B0G53F7PBR?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.a6b8bd50-5481-4967-bdd4-7bb3dd2b6eb8%3Aamzn1.sym.a6b8bd50-5481-4967-bdd4-7bb3dd2b6eb8&crid=3GE5ASVCS4CDZ&cv_ct_cx=alltagshelfer&keywords=alltagshelfer&pd_rd_i=B0G53F7PBR&pd_rd_r=5cff747b-29a5-43c0-a2d6-799305d9b76b&pd_rd_w=Qzelj&pd_rd_wg=93jXQ&pf_rd_p=a6b8bd50-5481-4967-bdd4-7bb3dd2b6eb8&pf_rd_r=AX44QVR1A3FY8HHGR5WK&qid=1781163277&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=alltagshelfer%2Caps%2C124&sr=1-49-3afb4ce4-e48e-4af9-8e65-b7e97051a03d-spons&xpid=a23igqzDCWI4z&aref=1eNMzlG88k&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=102b04436a537523af05f6cba453de4e&ref_=as_li_ss_tl",
    LUFTBEFEUCHTER:"https://www.amazon.de/Luftbefeuchter-Schlafzimmer-Kinderzimmer-Raumbefeuchter-automatische/dp/B0CFZXSQKM?crid=2514TTXL53P4E&dib=eyJ2IjoiMSJ9.KaFVN67c51MkYdPXhofVoqlJ6cczvTDXilJtTRQN3amPPjmtBIZIlZqucGsclwTWbv-MsnPUAh3yN68K55mTMns0RzXETyjOj3OmLPS6TcPckxLWeWC6UZvgC6P8BqWsihhaRjjIyq6KubxvBTofhGTf4pckh-oSMIjhN2huuMyb-IIPzStxaeu2Sb1SdtJd-bOHk00F2Vbr79oPsYEt85p3sdchCMfQkA5g93EeC-IscC99Uj2lQSsIo8A1wsO9crs9w-tqWlGcdTX3peGfkQEQiiDcQZGCTUQb0hTi-Ac.zVTgDia9CnyEIWd398BZKx89tbHWGYleyiOdssmh3c0&dib_tag=se&keywords=schlafzimmer&qid=1780682579&sprefix=schlafzimmer%2Caps%2C119&sr=8-45&ufe=app_do%3Aamzn1.fos.00b1ec55-3783-4b8e-9430-16820cd5ad16&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=5a1607764918e261481987fcb497518e&ref_=as_li_ss_tl",
  },


  AFFILIATE_BADEZIMMER: {
    SAUGNAPFDUSCHKADDY: "https://www.amazon.de/Kitsure-Duschablage-ohne-Bohren-Badezimmer/dp/B0CTZX8T23?crid=3M5NYDCQ8J2H1&dib=eyJ2IjoiMSJ9.ajXe_SGmxeb7UiyBh4Wft0NNoJjOazIJFa_w_UYS4GPiJw4Sbwwf2pbaOhb7ZQ8hGviSk6Xhasjg62xxYWZ1zT1nu3wAgqTHYCW4w0KdLMeC9CmNTGX2truLeiDOUuGNR65AEX_ETdoeyOtp7eLHc1c-KzdfNQp777Ziw0hKSQ2QlK6JRRihw0p4c_I7rDsHmZ9YLNimwNPzNsnVGnC6Xiu8isvCnD39NjDwp33HTheDuH8pGbS1bCxl7g6eRTVSIbbDSUsNqr1f2CqY0-BFHQkTeJINvv1dXhkqDsAkxcA.xiqmhD-GfBAnTqprVEqO7XRoL0auoeL_F4BGkuwe8dQ&dib_tag=se&keywords=badezimmer%2Borganizer&qid=1779276289&sprefix=badezimmer%2B%2Caps%2C141&sr=8-2-spons&aref=ma7GLfBPgx&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=fe7f4b01758da694c86bbd325bc0e79d&ref_=as_li_ss_tl",
    ABWISCHER: "https://www.amazon.de/MINISMUS-Fensterabzieher-Aufh%C3%A4nger-Duschabzieher-Schlierenfrei/dp/B09QH14TB3?crid=3M5NYDCQ8J2H1&dib=eyJ2IjoiMSJ9.ajXe_SGmxeb7UiyBh4Wft0NNoJjOazIJFa_w_UYS4GPiJw4Sbwwf2pbaOhb7ZQ8hGviSk6Xhasjg62xxYWZ1zT1nu3wAgqTHYCW4w0KdLMeC9CmNTGX2truLeiDOUuGNR65AEX_ETdoeyOtp7eLHc1c-KzdfNQp777Ziw0hKSQ2ZfNyQoSaKeFdkIpGBEGIV61-PNLiTJOK-uG7DPsaPQyu8isvCnD39NjDwp33HTheDuH8pGbS1bCxl7g6eRTVSIbbDSUsNqr1f2CqY0-BFHQZ8lAyeWkCQjNVdkcxBQHc.rvgzMaRTkC3Ns50SlFR9T2DxRFyCJEHAc8yQu5f_DmI&dib_tag=se&keywords=badezimmer%2Borganizer&qid=1779277081&sprefix=badezimmer%2B%2Caps%2C141&sr=8-51&xpid=PHqkrR9VWE_IN&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=43fd251854cd57697aab58909c5d6be3&ref_=as_li_ss_tl",
    HANDTUCHHALTER: "https://www.amazon.de/4smile-Handtuchhalter-ohne-bohren-Klebehaken-Extra-Stark-Haken-Selbstklebend-Handtuchhaken-Bad-Wandhaken-Schwarz-Kleiderhaken-Towel-Hook-Holder-Edelstahl/dp/B0CD7933J2?crid=3M5NYDCQ8J2H1&dib=eyJ2IjoiMSJ9.1BVG81gCW_aXBtJWxMDeP48RYHgyFvjZmaUF9yIZIxLiJw4Sbwwf2pbaOhb7ZQ8hGviSk6Xhasjg62xxYWZ1zT1nu3wAgqTHYCW4w0KdLMeC9CmNTGX2truLeiDOUuGNR65AEX_ETdoeyOtp7eLHc1c-KzdfNQp777Ziw0hKSQ2ZfNyQoSaKeFdkIpGBEGIV61-PNLiTJOK-uG7DPsaPQyu8isvCnD39NjDwp33HTheDuH8pGbS1bCxl7g6eRTVSIbbDSUsNqr1f2CqY0-BFHQkTeJINvv1dXhkqDsAkxcA.E52mxf1Y9-hDfvAGt82Ifhp1ry-if-nQFcW9DWPr5_U&dib_tag=se&keywords=badezimmer%2Borganizer&qid=1779276466&sprefix=badezimmer%2B%2Caps%2C141&sr=8-54&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=f6c7a83a057e8486c449de23aa8ef726&ref_=as_li_ss_tl",
    TOILETTENPAPIERHALTER:"https://www.amazon.de/Aikzik-Toilettenpapierhalter-Toilettenpapierrollenhalter-Klopapierhalter-Klorollenhalter/dp/B0BM5W77T5?crid=1NNKMC3BMNN5K&dib=eyJ2IjoiMSJ9.ezZHnCNNeEkKMu4JrwYJzbs16q5bxjggnr_ngxYSweS2pgtbPJV0-z6xoyQBdRwLzG40gwE-5N3SdbWmLk9oJnJ_bq5V8Y3_Q5aPklR754i6tEDksZ8IXzRNuMqcmVLFfQKmdqCA1Ri47fxQ1Yb1Jluuw3Td4Y5H0YKugcRhgi_0mMK4a9cXnN67p83FwXSyNXYSWQ1xvZqlOlNlchyF3bx-D6yJgg3-YzK7gbCNvF_C1ImpqiZBYZjCjwlKBe0V6blMdYIrJW1Xv5RA4kZPpYQZfSm3CP4VMoqj1s_nL_4.7viJsr95MlUmyOzBX0KHMulAN1Op8uvQndpZaybhYOM&dib_tag=se&keywords=badezimmer%2Borganizer&qid=1780681426&sprefix=badezimmer%2B%2Caps%2C113&xpid=gvOdFb9jgHHY8&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=e17df8a6651eab7bf6adcb84b5685d8a&ref_=as_li_ss_tl",
    WAESCHEKORB: "https://www.amazon.de/Lifewit-Kunststoffrahmen-W%C3%A4schekorbsammler-W%C3%A4schek%C3%B6rbe-Schlafzimmer/dp/B0FBRGV31L?crid=ZG63NE68U641&dib=eyJ2IjoiMSJ9.FX_3cWufGJyguaUiptjLorBK-QC54WP34huqz4QjUFdH2gJWhx3qMQRGPju4hG9jiw9jV5pUPoJ8k2ajbiX5vKJ3SL66yRl3Y7g-2KEgrMBdEd8cEgCIxLSAC_kpsk2-2iVoXq4TD9KMeXQ-nOM1IEcfwy-wvm8Ue2KNm09SUxuxiYhhRKYRn0a3tLKAnPoCZJ93Ccdi2wSPNyRld74-H7DzcHJ5D1mOncGRObSdgiLRNoDdUUDyRRIS6otoQAgNDHGI_zYXWSii-mcrcVx7WvDRCo-mhCq7omP_q4SEVpQ.K2eVpF1du-XifXhnUUY-gq99iQKwmcz-cQ0M8OvWFCs&dib_tag=se&keywords=badezimmer%2Bdeko&qid=1778762292&sprefix=badezimmer%2B%2Caps%2C119&sr=8-9&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=25d28778fddb6c1278b59e916966af62&ref_=as_li_ss_tl",
  },


  AFFILIATE_COZYLIFESTYLE: {
    TAGEBUCH: "https://www.amazon.de/6-Minuten-Tagebuch-Erwachsene-Original-Dankbarkeitstagebuch/dp/B08MKQZPDJ?crid=1AA2IUP6AVBWC&dib=eyJ2IjoiMSJ9.KR_S1c8HwgZiFwtEPi2voNM1aX6fpNZlF6ePg5CY5lmkN5FPIoMBhspmK_EqKWYpC0gzulT40HXoUtNxkNPpDkFtYDW-n31QKT8Uh5j8BO6kPLuQ_lC9w2NRTunL2e0lgEHkGRPB3_IJuhcwkbLoTavbSHquAxeFlMB_lAuuM8qZA1eou_7vVBuH9pnimkCHffLVgTijUqqHy-gsn-WREP9fMFtC-qK9mE02_XjJNsWA-aZAJUtG5tJ4vAWRCB0sUuB9lKe6hFpLsQ9tIwdMYRPUJvkmPvmmW9nsrhI2DbA.TgeixoZ_Z-KBs7zCnIAroGGdKbeO8Kg0DFSlNrM6K20&dib_tag=se&keywords=selfcare%2Bjournal&qid=1780738786&sprefix=selfcare%2Caps%2C230&sr=8-2-spons&aref=zmt3duzsSN&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=7e89e10a8da64f7313b230d2416baa9f&ref_=as_li_ss_tl",
    BIODANCEMASKE: "https://www.amazon.de/Biodance-Collagen-Real-Deep-Mask/dp/B0B2RM68G2?crid=GEHB5QFVXLK9&dib=eyJ2IjoiMSJ9.RGN-UsZ1T3qpDAOCRkdLsbDSw7gjvLwrOPB32UoaGyCx3yS-KmFxog_K3gBkV9nzU3laPXbiyADyArblnVQ3XDC3dd0eykSL5shglh-ZptyrLXP-TmbcF1NiGIZcJ7XwBFdBURO5MSjO_CLi0iXLKtgMXzXm_a-IKq42nAcApQdzkP72B5jbsd2oVZlHD8hGQndRtPznVD29VgPsTE-tOeLiFdVXkmqfmLPODBndm_HuvBHnkoOZlwgDM1Wey2DYZ6Xiorq0L0_BQKuTy7kHWBdR7rPfOC3B2H5x7TI7H1U.KSrwhFLTd16TdPCzdxkkE_ktkxDQhTrLMVl3YMmxOQE&dib_tag=se&keywords=selfcare%2Bprodukte&qid=1780738735&sprefix=selfcare%2B%2Caps%2C105&sr=8-2-spons&aref=LGX3QssRGg&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=668fb99ad1f1a423e3596d8b4178dc11&ref_=as_li_ss_tl",
    MASSAGEBUERSTE: "https://www.amazon.de/Massageb%C3%BCrste-Kopfmassage-Haarwachstum-Weizenstroh-Blutzirkulation/dp/B0BY9GQDG9?crid=5ROVQSXQ6QZL&dib=eyJ2IjoiMSJ9.D4l0tZd_RfSP-llG-ObCQ-aDrgeTG16ohTU3L1pLwjslfUPw8OHrcW59eD8BR63SM0fpskZDqkZ9VGr5RZsppCw6jOHKcqUMdxDJMiClSd5z1grnbeofm4wSBCLnCk7kMQjKFTwcgkneVEJQp1Qtwl9PnkYXKUKhnkWzxvMyZmdQuOrEq3xPrJ-Moo6MQHDSR0iy0fslOmxD1tdysMnbXsfoelWDv_3-HJXCSXMH6yBC1JauDf3LdgYdty8y0DyaFDN5y0QgbiIP_wSZwYmCbu3MvF3zHCJmcl1l0DSzdI8.wfITdgmReghCXkKKfTGvw50aCU86S0J4uyTnI_Vvs-w&dib_tag=se&keywords=virale%2Btiktok%2Bprodukte&qid=1780908133&sprefix=viral%2Caps%2C153&sr=8-6&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=dbe8620d2172e9689468ff400c23d06a&ref_=as_li_ss_tl",
    ZUNGENSCHABER: "https://www.amazon.de/MasterMedi-reines-kupfer-zungenschaber-reiseetui/dp/B01LAY47D0?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XMWOQ6NEHY69&dib=eyJ2IjoiMSJ9.e3XDf2PSGvSIZV8m_B7dtcJxKenK9LrkDTWwRddpP_gtu-mTY83NNhFt4qWS4zUc6q1dWAzMVxIv9wniFNKaBZOEdxyXxvDP2rL_eiqIoj-qA_R9s0BWf3CaS0kNH1YQv52cUcLXV-AV3R7LO4HW2cKB2aZpgSVy6eH9KYgNQ7GIlSoVqcH32xVulneUa0n2_m3sj-sGpCXeeC-dkgnb8PJwXVNn542D-c70fKECGbt-E0iztPzN146nyymH0mUILjaGAvT-DKn7vMLemQkqsXmnHTnMij5M2hGAoytoCW0.JLFl190grd8ac9-3Oz-SG3YHfp5kAkz_cttEOPFA4X8&dib_tag=se&keywords=alltagshelfer&qid=1780906599&sprefix=alltagshelfer%2Caps%2C141&sr=8-19-spons&aref=59yL1FhD8L&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=105819f98d1495be833e6ba154453dce&ref_=as_li_ss_tl",
    AUGENPADS: "https://www.amazon.de/COSRX-Augenringe-Tr%C3%A4nens%C3%A4cken-Schwellungen-Anti-Falten/dp/B0DLKCCPYZ?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JWIHMXZDG7Z4&dib=eyJ2IjoiMSJ9.wXIaZ8mcGCkESPnRduslZoG4QUVQl_zEEBRlb4YnyfmprAYdHUADAZbrA5TCrIXF5KOAWyqolCfPxJizbXfgzD3s56BaZ5dfvIr3wcz4fU-y0OKYUC9IuAeEWSL2nNcD6DCWJJ2FSnEO1H2SH8O_ycAb84twuF0aGNp4SWhAF_LUjp7pmC4Em2JmSo7ZTIIy1GHHOyxNJxKGsuHYE5v2wQWri7mh4kE-ZzICZn6nz6LLi0vpnULUBVFM8ctj4cJs6auji384lj3nacywooA9rmBOnFMamg7Z3mUXNWXIqNM.1bDyySo64Hf1INGne-emMNi3LzSwPVsELbF--z9mLSI&dib_tag=se&keywords=virale%2Bprodukte&qid=1781163019&sprefix=virale%2Bprodukte%2Caps%2C160&sr=8-29&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=404bf476ccdfff17737cb7d9479988f1&ref_=as_li_ss_tl",
    CERAVE: "https://www.amazon.de/CeraVe-Porentiefe-Sch%C3%A4umendes-Reinigungsgel-Salicyls%C3%A4ure/dp/B0B7RQ46LD?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JWIHMXZDG7Z4&dib=eyJ2IjoiMSJ9.wXIaZ8mcGCkESPnRduslZoG4QUVQl_zEEBRlb4YnyfmprAYdHUADAZbrA5TCrIXF5KOAWyqolCfPxJizbXfgzD3s56BaZ5dfvIr3wcz4fU-y0OKYUC9IuAeEWSL2nNcD6DCWJJ2FSnEO1H2SH8O_ycAb84twuF0aGNp4SWhAF_LUjp7pmC4Em2JmSo7ZTIIy1GHHOyxNJxKGsuHYE5v2wQWri7mh4kE-ZzICZn6nz6LLi0vpnULUBVFM8ctj4cJs6auji384lj3nacywooA9rmBOnFMamg7Z3mUXNWXIqNM.1bDyySo64Hf1INGne-emMNi3LzSwPVsELbF--z9mLSI&dib_tag=se&keywords=virale+produkte&qid=1781163019&sprefix=virale+produkte%2Caps%2C160&sr=8-7&linkCode=ll2&tag=upgradeyou07d-21&linkId=8b190364c86c8c478fef82d1d3f1414e&ref_=as_li_ss_tl",
    TANGLETEEZER: "https://www.amazon.de/Tangle-Teezer-Detangler-Millennial-handlichem/dp/B07D395945?crid=5ROVQSXQ6QZL&dib=eyJ2IjoiMSJ9.D4l0tZd_RfSP-llG-ObCQ-aDrgeTG16ohTU3L1pLwjslfUPw8OHrcW59eD8BR63SM0fpskZDqkZ9VGr5RZsppCw6jOHKcqUMdxDJMiClSd5z1grnbeofm4wSBCLnCk7kMQjKFTwcgkneVEJQp1Qtwl9PnkYXKUKhnkWzxvMyZmdQuOrEq3xPrJ-Moo6MQHDSR0iy0fslOmxD1tdysMnbXsfoelWDv_3-HJXCSXMH6yBC1JauDf3LdgYdty8y0DyaFDN5y0QgbiIP_wSZwYmCbu3MvF3zHCJmcl1l0DSzdI8.wfITdgmReghCXkKKfTGvw50aCU86S0J4uyTnI_Vvs-w&dib_tag=se&keywords=virale%2Btiktok%2Bprodukte&qid=1780908133&sprefix=viral%2Caps%2C153&sr=8-16&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=03fb8418dfd75385528979703d94084d&ref_=as_li_ss_tl",
    KUSCHELDECKE: "https://www.amazon.de/BEDELITE-Kuscheldecke-Flauschig-Decke-Klein/dp/B0D4181JS6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HOCIK5Y64F7&dib=eyJ2IjoiMSJ9.9DxHtb62cCQfsZ8SaKpy_LbH17B1Lofc59RiiXvIldGkiqjQYVUD4sMfyQcYi-WS8EOhsgQLm5Qej3ZONeNwVxIZGWu8GHzwPF7X0_-W0DxsiZgS9JsWFkrdgJUn2Oc_rTGExKXBi3klzYOFdEipbA-l0JYq_G-XafDtp-Mj7rsp848t0S9EhhfMJAU5ghHQeCOxdSeYUoHJzpYtgvhvyxf_dvyYQf-G9TiZFO_ZeDALwmLWySJppZyXoybI5yD1IVfyDnkWRO2BrPqkCusDNYC5KXO-0eB3zVSZS6faDcc.p-cXgHoCnkfHgG3052LOqpDOwF2Q_yVnF8PvsAQ6ObE&dib_tag=se&keywords=reading%2Bcorner&qid=1780908433&sprefix=reading%2Bcorner%2B%2Caps%2C131&sr=8-6&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=bb53a4081c358833e818da8cd7560a6b&ref_=as_li_ss_tl",
    MASSAGEGERÄT: "https://www.amazon.de/Brelley-Massageger%C3%A4t-Nackenmassageger%C3%A4t-R%C3%BCckenmassageger%C3%A4t-Muskelschmerzen/dp/B0DYJ5M8F6?crid=2F6Q8JH66H35F&dib=eyJ2IjoiMSJ9.bkCsi9r-soY-I4fyAUfTmQikBNFFAEwMvJZVZMaZsLGbPe0V7Q9hBVrk8SR10pB3P3gdn81azdpeuVSg_H3D1ZV8Txcm7qexXcVhwf0N01gUgp1upjlHtEyG-quBkfzeMOoRWiIZmrt2r2-C2pu7Ly5rN9EvbbwDjOfHZkUMUZLB0zrK1_7dvP9aaQWzttRePFzGMGs_OKli7Fpz1q4J3msjVr46T0W71IE-1Oz9kmG3erm_6zvVQ-NFYIZRhQQfDRdU9LSrbuFZqJc7tYXRlMaMePTvVA3bQu5wYEkgSmw.i48B4KwQo0ECnx-c07rgNMPJ7FnkkHVdP_46O4EMsCU&dib_tag=se&keywords=brelley%2Bmassageger%C3%A4t&qid=1781089465&sprefix=brelle%2Caps%2C115&sr=8-1-spons&aref=nTBwX4k4Fq&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=8559dc844dbe8e5e836b3e164792bffe&ref_=as_li_ss_tl",
    LESELAMPE: "https://www.amazon.de/Lenudar-Klemmlampe-Helligkeiten-Wiederaufladbare-Klemmleuchte/dp/B09SLR3MLY?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HOCIK5Y64F7&dib=eyJ2IjoiMSJ9.9DxHtb62cCQfsZ8SaKpy_LbH17B1Lofc59RiiXvIldGkiqjQYVUD4sMfyQcYi-WS8EOhsgQLm5Qej3ZONeNwVxIZGWu8GHzwPF7X0_-W0DxsiZgS9JsWFkrdgJUn2Oc_rTGExKXBi3klzYOFdEipbA-l0JYq_G-XafDtp-Mj7rsp848t0S9EhhfMJAU5ghHQeCOxdSeYUoHJzpYtgvhvyxf_dvyYQf-G9TiZFO_ZeDALwmLWySJppZyXoybI5yD1IVfyDnkWRO2BrPqkCusDNYC5KXO-0eB3zVSZS6faDcc.p-cXgHoCnkfHgG3052LOqpDOwF2Q_yVnF8PvsAQ6ObE&dib_tag=se&keywords=reading+corner&qid=1780908433&sprefix=reading+corner+%2Caps%2C131&sr=8-5&linkCode=ll2&tag=upgradeyou07d-21&linkId=2c921cab83da6888e8d172e133977948&ref_=as_li_ss_tl",
  },


  AFFILIATE_GARTEN: {
    SOLARLICHTERKETTE: "https://www.amazon.de/Geemoo-Lichterkette-Gl%C3%BChbirnen-Wetterfest-Warmwei%C3%9F/dp/B0BVY64G4G?crid=2OOIIGFAN4066&dib=eyJ2IjoiMSJ9.9Liv8dsVUHQloxoc_c8PjQMTV_4d1uvh4caPPoPGZdjeBa2TC8D8EPLY8Qto17U8OD5Suxh087JG8tJToOHK0S8LcWgqU0q892fSXiZaVg_Ic_oIyW2zQCS_vWEFU9Fxn8gG9dv1E9jSeYOZkgzW6av42ZkkwRVuxZREt_Md8hRNs7bS--3sUA2Ms2G1Q3NqcxYJCi1vQw2HfnWHh7OzLbKHD0F5Pqk2oa29LBX8rc9D5JY8ydNnEZ9fc1NIugin_TFPY8ghfwdH_8UjkZaa_hLMGrf1lCkDpbHEw3NDE_w.PMVJr-yZTZ14M5ZqOBcNhhHyrESBys4ECGMtVY1ZXZM&dib_tag=se&keywords=garten%2Bdeko&qid=1780681787&sprefix=garten%2B%2Caps%2C149&sr=8-8&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=56d5444c514ea2fa9b45075a7c272af9&ref_=as_li_ss_tl",
    SOLARSPRINGBRUNNEN:"https://www.amazon.de/Teichbrunnen-Effekten-Schwimmende-Wasserpumpe-Gartenteich/dp/B084HBN2BZ?crid=2OOIIGFAN4066&dib=eyJ2IjoiMSJ9.9Liv8dsVUHQloxoc_c8PjQMTV_4d1uvh4caPPoPGZdjeBa2TC8D8EPLY8Qto17U8OD5Suxh087JG8tJToOHK0S8LcWgqU0q892fSXiZaVg_Ic_oIyW2zQCS_vWEFU9Fxn8gG9dv1E9jSeYOZkgzW6av42ZkkwRVuxZREt_Md8hRNs7bS--3sUA2Ms2G1Q3NqcxYJCi1vQw2HfnWHh7OzLbKHD0F5Pqk2oa29LBX8rc9D5JY8ydNnEZ9fc1NIugin_TFPY8ghfwdH_8UjkZaa_hLMGrf1lCkDpbHEw3NDE_w.PMVJr-yZTZ14M5ZqOBcNhhHyrESBys4ECGMtVY1ZXZM&dib_tag=se&keywords=garten+deko&qid=1780681787&sprefix=garten+%2Caps%2C149&sr=8-18&linkCode=ll2&tag=upgradeyou07d-21&linkId=8ffe0f89d6e6c05336912dc9615add3f&ref_=as_li_ss_tl",
    HÄNGENDESOLARLAMPE:"https://www.amazon.de/BUCASA-Solarlampen-LED-Gl%C3%BChbirne-Wasserdicht-Solarleuchten/dp/B0CKR5HJFB?crid=2OOIIGFAN4066&dib=eyJ2IjoiMSJ9.9Liv8dsVUHQloxoc_c8PjQMTV_4d1uvh4caPPoPGZdjeBa2TC8D8EPLY8Qto17U8OD5Suxh087JG8tJToOHK0S8LcWgqU0q892fSXiZaVg_Ic_oIyW2zQCS_vWEFU9Fxn8gG9dv1E9jSeYOZkgzW6av42ZkkwRVuxZREt_Md8hRNs7bS--3sUA2Ms2G1Q3NqcxYJCi1vQw2HfnWHh7OzLbKHD0F5Pqk2oa29LBX8rc9D5JY8ydNnEZ9fc1NIugin_TFPY8ghfwdH_8UjkZaa_hLMGrf1lCkDpbHEw3NDE_w.PMVJr-yZTZ14M5ZqOBcNhhHyrESBys4ECGMtVY1ZXZM&dib_tag=se&keywords=garten%2Bdeko&qid=1780681787&sprefix=garten%2B%2Caps%2C149&sr=8-23&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=0734a3c698c5fc2b496d9c89a3108143&ref_=as_li_ss_tl",
  },


  AFFILIATE_HOMEOFFICE: {
    ETIKETTIRGERAET:"https://www.amazon.de/ORGSTA-S001-Etikettiermaschinen-Beschriftungsger%C3%A4t-Ettikettiergeraet/dp/B0DXN6T2RX?crid=2K1NU0ZPHV4B5&dib=eyJ2IjoiMSJ9.5x8tvN9vE7FpiF0fIFlgnLuLHQpHQa0eJGP4mR7DNotcXonfNssme-aCqVe8X0s59sZNAske5ZEUaKjHSCopMDrTQH31OC1dfgOLRKI-0QbebpWNokxVdQWNIpu6_QUsVmo2y-JLZFxQbVCeQPaIdHuaM-4eZqApV0bZ58PkP_hcVlFfMrf17BD1ApXlGGNEz1iEwyqQXNB9LIkdSN2B09tta1Mf3iqz0tOgvDdWLnrrfAfMwkoWzspI6-2Ou8r-fMMOJBfYIUh9FmWZZ0OHlITmFS26cAsRdbZFxAGsGc0.Pg0I1UApi4ohD9k4ucDXcpVo1VKtt_AxqC4v7WdEEFw&dib_tag=se&keywords=homeoffice%2Bausstattung&qid=1779794225&sprefix=homeoffice%2B%2Caps%2C164&sr=8-8&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=cae091bc58dcbe1372c6edea6333c749&ref_=as_li_ss_tl",
    KABELCLIPS:"https://www.amazon.de/SYNCWIRE-Kabel-Organizer-Kabel-Management-USB-Kabelhalter-System-Schreibtischzubeh%C3%B6r-wei%C3%9F/dp/B08P2P8HM2?crid=2K1NU0ZPHV4B5&dib=eyJ2IjoiMSJ9.5x8tvN9vE7FpiF0fIFlgnLuLHQpHQa0eJGP4mR7DNotcXonfNssme-aCqVe8X0s59sZNAske5ZEUaKjHSCopMDrTQH31OC1dfgOLRKI-0QbebpWNokxVdQWNIpu6_QUsVmo2y-JLZFxQbVCeQPaIdHuaM-4eZqApV0bZ58PkP_hcVlFfMrf17BD1ApXlGGNEz1iEwyqQXNB9LIkdSN2B09tta1Mf3iqz0tOgvDdWLnrrfAfMwkoWzspI6-2Ou8r-fMMOJBfYIUh9FmWZZ0OHlITmFS26cAsRdbZFxAGsGc0.Pg0I1UApi4ohD9k4ucDXcpVo1VKtt_AxqC4v7WdEEFw&dib_tag=se&keywords=homeoffice%2Bausstattung&qid=1779794225&sprefix=homeoffice%2B%2Caps%2C164&sr=8-10&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=2bc9ff03e0b57481330b97b2fd8cbd53&ref_=as_li_ss_tl",
    SCHREIBTISCHORGANIZER: "https://www.amazon.de/EAZHOP-Schreibtisch-Organizer-Multifunktionale-Herausnehmbaren-Fernbedienungshalter/dp/B0FW3T62CB?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3P8Q135YD6XRR&dib=eyJ2IjoiMSJ9.K97IEW1t4-UUA0p1GiK72krxDYxaKtHcvQ6OKQ5bUYd7wbS2hXjuXY0idFgg1b3nyXIvkUNp1qg0tK1lQstN2aOTSjbY3ReAQNafEExRSpf8xWPeJ_jLiMcKLY_IsO8jt-ki6cg0gjITr0GHBwcM1rRTkmHLCaw4AnMxEzYDkGh_HqhZ-K-ByVaeF6Okb_vDjcWjPRcZbtPXq71ryjmhpCm6hUY5jHMEW9fwHBnqjf05ERBIBZX8Jz8zJTDucVqdxIvQ2DUE9zzTV7XhQIK-Xb6IM3MDSWC3DPEgGVFt2CQ.WQcZxVzAaMKPbkq6LFWDkb0EFVOsUqMd97IsE8P0nNY&dib_tag=se&keywords=Bambus-Schreibtisch-Organizer&qid=1781089501&sprefix=bambus-schreibtisch-organizer%2Caps%2C119&sr=8-18&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=179c49f25fa9fb7cc6b61a0aa2607a98&ref_=as_li_ss_tl",
    SCHREIBTISCHUNTERLAGE: "https://www.amazon.de/YSAGi-Schreibtischunterlage-Multifunktionales-Schreibunterlage-Tisch-Schutz/dp/B0CB18K7B4?crid=2K1NU0ZPHV4B5&dib=eyJ2IjoiMSJ9.5x8tvN9vE7FpiF0fIFlgnLuLHQpHQa0eJGP4mR7DNotcXonfNssme-aCqVe8X0s59sZNAske5ZEUaKjHSCopMDrTQH31OC1dfgOLRKI-0QbebpWNokxVdQWNIpu6_QUsVmo2y-JLZFxQbVCeQPaIdHuaM-4eZqApV0bZ58PkP_hcVlFfMrf17BD1ApXlGGNEz1iEwyqQXNB9LIkdSN2B09tta1Mf3iqz0tOgvDdWLnrrfAfMwkoWzspI6-2Ou8r-fMMOJBfYIUh9FmWZZ0OHlITmFS26cAsRdbZFxAGsGc0.Pg0I1UApi4ohD9k4ucDXcpVo1VKtt_AxqC4v7WdEEFw&dib_tag=se&keywords=homeoffice%2Bausstattung&qid=1779794225&sprefix=homeoffice%2B%2Caps%2C164&sr=8-7&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=3604bc0f934de7b8ab7667869573e07b&ref_=as_li_ss_tl",
    WHITEBOARD: "https://www.amazon.de/Amazon-Basics-Magnet-Whiteboard-Stifthalter-Aluminiumrahmen/dp/B077TGBB72?crid=2K1NU0ZPHV4B5&dib=eyJ2IjoiMSJ9.5x8tvN9vE7FpiF0fIFlgnLuLHQpHQa0eJGP4mR7DNotcXonfNssme-aCqVe8X0s59sZNAske5ZEUaKjHSCopMDrTQH31OC1dfgOLRKI-0QbebpWNokxVdQWNIpu6_QUsVmo2y-JLZFxQbVCeQPaIdHuaM-4eZqApV0bZ58PkP_hcVlFfMrf17BD1ApXlGGNEz1iEwyqQXNB9LIkdSN2B09tta1Mf3iqz0tOgvDdWLnrrfAfMwkoWzspI6-2Ou8r-fMMOJBfYIUh9FmWZZ0OHlITmFS26cAsRdbZFxAGsGc0.Pg0I1UApi4ohD9k4ucDXcpVo1VKtt_AxqC4v7WdEEFw&dib_tag=se&keywords=homeoffice%2Bausstattung&qid=1779794225&sprefix=homeoffice%2B%2Caps%2C164&sr=8-55&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=696ee209ea5f834055b0240ce3a553e0&ref_=as_li_ss_tl",
  },


  AFFILIATE_KUECHE: {
    GEWUERTZSTAENDER: "https://www.amazon.de/HOOBRO-Gew%C3%BCrzst%C3%A4nder-K%C3%BCchen-Organizer-Gew%C3%BCrzhalter-Schminktisch/dp/B0DP71ZDM6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.76b52a97-95f8-4bec-a819-2bc9cec05e9c:amzn1.sym.76b52a97-95f8-4bec-a819-2bc9cec05e9c&crid=AJVETAZUVC93&cv_ct_cx=Bambus-Drehregal%2Bf%C3%BCr%2BK%C3%BCche%2B%26%2BPantry&keywords=Bambus-Drehregal%2Bf%C3%BCr%2BK%C3%BCche%2B%26%2BPantry&pd_rd_i=B0DP71ZDM6&pd_rd_r=bc73568c-c438-48de-b564-d23ac4c28fcf&pd_rd_w=k94aX&pd_rd_wg=7ECSU&pf_rd_p=76b52a97-95f8-4bec-a819-2bc9cec05e9c&pf_rd_r=5ZHJTVJ5VNRHV5DY3EXW&qid=1778062626&sbo=RZvfv//HxDF%2BO5021pAnSA%3D%3D&sprefix=bambus-drehregal%2Bf%C3%BCr%2Bk%C3%BCche%2B%26%2Bpantry,aps,181&sr=1-2-8e23ab4d-049b-45df-99e1-69df077c62b7-spons&aref=5OipBklsZY&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=bcd64856475eeffafe447170396ec5d0&ref_=as_li_ss_tl",
    GLASOELFLASCHE: "https://www.amazon.de/SWEET-VIEW-Glas%C3%B6lflaschen-Spr%C3%BChflasche-Hei%C3%9Fluftfritteuse/dp/B0D25YFS8F?crid=1137WA3DPB9DM&dib=eyJ2IjoiMSJ9.QKKzzjZPITyFNWqkTK8hTOBCmyPcinkFwPirJktG4AFMRwLNRg_ljdoeNZKgySxfjgl3oy2mVifvMxshqdFiMAUpZfxS-fBpU6kgX_Wqx5iymHvTIU09UWY59qB917KCCrdtrx3z2Up4qOqATn3q1Q9-Nq4xRIfoXmVH8XA6FnoEGsUt08c3DexCM_sDeRHTDz9nc7Sssuj2rrhUvp_-HRActcFLzChAeiHfcysiyfYibJ-F2IjzqHCr1j4q4ZQhC3afsVQhSR6GNT_bHRRB0S18Cp3VkyJb3JZ2la5Bs30.m9e-aU6j0s8iQObg7LTtcGwlnK_HQEonYhiYT9xAERs&dib_tag=se&keywords=k%C3%BCchen%2Bgadgets%2Bmust%2Bhaves&qid=1777908353&sprefix=k%C3%BCchen%2Bgadgets%2B,aps,161&sr=8-4-spons&aref=A2lgd3ZBxl&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=807b080c8f64c754614e215b7f0a7638&ref_=as_li_ss_tl",
    GLASTRINKBECHER: "https://www.amazon.de/INSETLAN-dickwandige-hochwertigem-luftdichtes-wasserdichtes/dp/B0DJQQ2F78?crid=1E8TW5DMF6P23&dib=eyJ2IjoiMSJ9.CScNjQob8plVt40shoZb-jovorSuk4Hiea3TYL7UWyIXbXmHBFoKwBncEZjxhU9yCGaqEm7qwrXdIqalT0SkNxsCcqSEWzQvwWiB7NbqO64agZG3kufqtT2Vc-mremUWTEyKFvyTRA9eNmUyrEGDQsiGMitLMMzhsqQOKhKO--UHtDcdhC695V56F-5Zo0HP9JbDxORW9JHzFT41ALrzK7WSOMDbJtdrKqe4n714k6XhhGUR22Fl0W5J4b22z-emNg6Q7hwGWksL9QkN3XsbwLyQboTArQfREbzWhYRI9C4.8HYMQACmfh-HyJlnSiQ8ThCQTkJc6ZtwEK8K9KDMzbg&dib_tag=se&keywords=home%2Bfinds%2Baesthetic&qid=1777977194&sprefix=home%2Bfinds%2B,aps,148&sr=8-7&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=3e3bae8b41c434e0c88db22d6c104e8e&ref_=as_li_ss_tl",
    KUECHENUTENSILIENHALTER: "https://www.amazon.de/Alupedia-K%C3%BCchenutensilienhalter-Besteckhalter-Pfannenwender-Elfenbeinwei%C3%9F/dp/B0FVMCJ9B5?crid=2HB5FA2QH28U8&dib=eyJ2IjoiMSJ9.Vau3qBP3zYA1AI1To5bGUjdAZRDBa5BIph0SPhTt96EXbXmHBFoKwBncEZjxhU9yCGaqEm7qwrXdIqalT0SkNxsCcqSEWzQvwWiB7NbqO64agZG3kufqtT2Vc-mremUWTEyKFvyTRA9eNmUyrEGDQm88AkePr-2u9pLRTJRjeaOUyV9KU9PNFwHVMjZwdg-GXheoAuREpEXedNdarYNALtxO9vhr53B0GNt6w2KKvBLhhGUR22Fl0W5J4b22z-emNg6Q7hwGWksL9QkN3XsbwIYtrY24BG_nbUwsq1Nk0PA.6Myc1by_X_LY7ftPVh44c5yrdMO_9h39I2VuQTe2_EI&dib_tag=se&keywords=home%2Bfinds%2Baesthetic&qid=1777979455&sprefix=,aps,143&sr=8-14-spons&aref=kc952MBBmf&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=9af3cd018391fc9bbc7d5ac961c45ca3&ref_=as_li_ss_tl",
    MILCHAUFSCHAUMER: "https://www.amazon.de/SIMPLETASTE-Milchaufsch%C3%A4umer-Milchschaum-Antihaftbeschichtung-Automatische/dp/B0DRVFKK7W?crid=33VV045AARLNG&dib=eyJ2IjoiMSJ9.7451VajBDpQ_i8OsNHGVD2IJMOiYk8m5SOemnbs9b1piH_9uFKfq1JYdZNMxehh5Ki2GkE48ksG9NIByNNvk1gC8xsfAar25hh2qkUpc3IO4G8IrgHHOiCMt5zoxxbv4N6eCjlANkpYVX2MfBeBekDVKxmPrZbKXFreFfaYpXfsoytdyREKa8gJATMTiI82Jju5mz-7QfLxWmrNdKmx25kyPpe2Jwdrv4lGyFWMTJbw.JFYk59drgpyy2sbB8IAunNvaZYOrEhMw4XobY9A6Ewg&dib_tag=se&keywords=milchaufsch%C3%A4umer&qid=1780738480&sprefix=mil%2Caps%2C116&sr=8-4&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=1673c644facc1e6c0d7323452e880a2d&ref_=as_li_ss_tl",
    SERVICEPLATTE: "https://www.amazon.de/levandeo-Servierplatte-Kuchenst%C3%A4nder-Servierst%C3%A4nder-Dekoteller/dp/B0GY43XGR5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=RX6E08L5LPJS&dib=eyJ2IjoiMSJ9.WI58nw7mUS5LHEwd8v4npbHPcxsKSgjtVa8-6X4Gjx_AEh2innIby1JIVs7XRaTHD68RlkBuM1LchsCRgHS_Q8kmboWsJ2LBsBo_BI9skUFTB9Z1rn6yXoTtRZzjtPMDV0_WYflTi7JSkmeJHE_h1_gAx_rf0HTS1ozB2klWZ8_ycWOjk6Z4_8NzK9Gkkis2IWE-Jc12EKynhMsVaAoy4JSRk-yzYQsKqf1YICnRGsuRY4EKKz7hdls18KbjPbkamTs8OrCrP_nchdSggBEzg4hfr5aAIW6uk0Ieb18jcR0.z3cYfr64cKTQoVbTS2tQYoZKd79iXdXQB_4YqctNDzo&dib_tag=se&keywords=%C3%84sthetische+Pantry-+%26+K%C3%BCchenorganisation&qid=1778065244&sprefix=%C3%A4sthetische+pantry-+%26+k%C3%BCchenorganisation,aps,189&sr=8-21-spons&aref=KqHcTKCao9&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=dda04812cdb0e50a1a2819e1dd00b180&ref_=as_li_ss_tl",
    SILIKONBACKMATTE: "https://www.amazon.de/Amazon-Basics-Rechteckig-Backmatte-Silikon/dp/B077XTPWZ5?crid=1137WA3DPB9DM&dib=eyJ2IjoiMSJ9.QKKzzjZPITyFNWqkTK8hTOBCmyPcinkFwPirJktG4AFMRwLNRg_ljdoeNZKgySxfjgl3oy2mVifvMxshqdFiMAUpZfxS-fBpU6kgX_Wqx5iymHvTIU09UWY59qB917KCCrdtrx3z2Up4qOqATn3q1Q9-Nq4xRIfoXmVH8XA6FnoEGsUt08c3DexCM_sDeRHTDz9nc7Sssuj2rrhUvp_-HRActcFLzChAeiHfcysiyfYibJ-F2IjzqHCr1j4q4ZQhC3afsVQhSR6GNT_bHRRB0S18Cp3VkyJb3JZ2la5Bs30.m9e-aU6j0s8iQObg7LTtcGwlnK_HQEonYhiYT9xAERs&dib_tag=se&keywords=k%C3%BCchen%2Bgadgets%2Bmust%2Bhaves&qid=1777908353&sprefix=k%C3%BCchen%2Bgadgets%2B,aps,161&sr=8-3-spons&aref=x2PPstWs3M&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=911aca141c7c2d8ca281d7352b54a576&ref_=as_li_ss_tl",
    STABMILCHAUFSCHAUMER: "https://www.amazon.de/Milchaufsch%C3%A4umer-Milchsch%C3%A4umer-Getr%C3%A4nkemixer-Kaffeebesen-batteriebetriebener/dp/B0D83N2KXC?crid=33VV045AARLNG&dib=eyJ2IjoiMSJ9.7451VajBDpQ_i8OsNHGVD2IJMOiYk8m5SOemnbs9b1piH_9uFKfq1JYdZNMxehh5Ki2GkE48ksG9NIByNNvk1gC8xsfAar25hh2qkUpc3IO4G8IrgHHOiCMt5zoxxbv4N6eCjlANkpYVX2MfBeBekDVKxmPrZbKXFreFfaYpXfsoytdyREKa8gJATMTiI82Jju5mz-7QfLxWmrNdKmx25kyPpe2Jwdrv4lGyFWMTJbw.JFYk59drgpyy2sbB8IAunNvaZYOrEhMw4XobY9A6Ewg&dib_tag=se&keywords=milchaufsch%C3%A4umer&qid=1780738480&sprefix=mil%2Caps%2C116&sr=8-10&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=627e24175d03fc98d5df743cddfaa2a0&ref_=as_li_ss_tl",
  },


  AFFILIATE_SCHLAFZIMMER: {
    SEIDENKISSENBEZUG: "https://www.amazon.de/SeidenKissenbezug-Ravmix-Rei%C3%9Fverschluss-Maulbeerseide-Kopfkissenbezug/dp/B0CKN29LXF?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1YX9KU0M7MHTS&dib=eyJ2IjoiMSJ9.LaWkix6TyrePjyLQ1vbl-mcdV8aCbhpsFtByEWHYt25THRbUd9MgF1SbZusghHsNBe85NbiwY0AjJTmPOd0FnrsaHTQv0LDJZZUOCp5haKhQPQMQuIKuasZZDyiRdjdWX7y9YxWGsIqO6T8W-4CcPa8JU86eBcoan4Q9q9c-DMs8j8NWCMKMNRMIsa6hFqhvBPSKfXEvOT0RjMCrjAUq1dfMP5l18MTBXXIN6eesjfwqjoYsNosjfYvqQzEOllnTX7OdMM2fnmVaU_Pt90xxG6wG2Jni7a_oc7jO6HjUvOg.y1e5mDV44uw5kiqglN_PObgITzX1Sy67JOoRkAI8Hz4&dib_tag=se&keywords=schlafzimmer%2Bseidenkissen&qid=1781089672&sprefix=schlafzimmer%2Bseidenkissen%2Caps%2C112&sr=8-1-spons&xpid=VRQj-Sig9a2K9&aref=9AVHvw0f8A&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=4fc5c50f71e2f1a005db67b75bc68685&ref_=as_li_ss_tl",
    STANDSPIEGEL: "https://www.amazon.de/BEAUTYPEAK-Ganzk%C3%B6rperspiegel-Standspiegel-Bodenspiegel-Eitelkeitsspiegel/dp/B0DGXQ45HT?content-id=amzn1.sym.76b52a97-95f8-4bec-a819-2bc9cec05e9c:amzn1.sym.76b52a97-95f8-4bec-a819-2bc9cec05e9c&crid=2YJNOG8SVP97F&cv_ct_cx=home%2Bdecoration&keywords=home%2Bdecoration&pd_rd_i=B0DGXQ45HT&pd_rd_r=f499d550-08c4-4355-a315-470bac3c8b62&pd_rd_w=ifOjG&pd_rd_wg=6fp8F&pf_rd_p=76b52a97-95f8-4bec-a819-2bc9cec05e9c&pf_rd_r=GCMGSS5SNS1RFFXH37JH&qid=1778411198&sbo=RZvfv//HxDF%2BO5021pAnSA%3D%3D&sprefix=,aps,230&sr=1-3-8e23ab4d-049b-45df-99e1-69df077c62b7-spons&aref=jTcrd4EnkD&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=68c2b8536a0fc5b325b2a5f666b4758e&ref_=as_li_ss_tl",
    NACHTLICHTSTECKDOSE:"https://www.amazon.de/AUVON-Bewegungssensor-D%C3%A4mmerungssensor-hinterleuchtete-Schlafzimmer/dp/B0C3M5MS3N?crid=2514TTXL53P4E&dib=eyJ2IjoiMSJ9.KaFVN67c51MkYdPXhofVoqlJ6cczvTDXilJtTRQN3amPPjmtBIZIlZqucGsclwTWbv-MsnPUAh3yN68K55mTMns0RzXETyjOj3OmLPS6TcPckxLWeWC6UZvgC6P8BqWsihhaRjjIyq6KubxvBTofhGTf4pckh-oSMIjhN2huuMyb-IIPzStxaeu2Sb1SdtJd-bOHk00F2Vbr79oPsYEt85p3sdchCMfQkA5g93EeC-IscC99Uj2lQSsIo8A1wsO9crs9w-tqWlGcdTX3peGfkQEQiiDcQZGCTUQb0hTi-Ac.zVTgDia9CnyEIWd398BZKx89tbHWGYleyiOdssmh3c0&dib_tag=se&keywords=schlafzimmer&qid=1780682787&sprefix=schlafzimmer%2Caps%2C119&sr=8-6&xpid=aFvfuvnh2jOGU&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=e5b872e15a23396fdc6d6506bebf74ed&ref_=as_li_ss_tl",
    KUSCHLIGERKURZFLORTEPPICH:"https://www.amazon.de/the-carpet-Relax-kuscheliger-Kurzflor-Teppich/dp/B0CKZ4GW25?crid=2514TTXL53P4E&dib=eyJ2IjoiMSJ9.p8llj_g19weG2L4d4GmdibN2A6I3nn0sYRfB2WijekaURY31CcDXGTFQUPPiqkq6ItvaQakvl2jsdjci_OVd9CI_C_jj7MjE3C1xZp1d1NY.Ic_4E6YFzCEau1pJhI7UNn7NqYLUmTSwF1xGfI7skNk&dib_tag=se&keywords=schlafzimmer&qid=1780682685&sprefix=schlafzimmer%2Caps%2C119&xpid=aFvfuvnh2jOGU&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=0c3b37e7f9704e0b5114e7d8b1cb60d6&ref_=as_li_ss_tl",
  },


  AFFILIATE_SERVICE: {
    AMAZONBABYWUNSCHLISTE: "https://www.amazon.de/baby-reg?tag=upgradeyou07d-21",
    AMAZONHOCHZEITSLISTE: "https://www.amazon.de/wedding?tag=upgradeyou07d-21",
    AMAZONKIDS: "https://www.amazon.de/freetimetesten?tag=upgradeyou07d-21",
    AMAZONMUSIKUNLIMITED: "https://www.amazon.de/music/prime?tag=upgradeyou07d-21",
    AMAZONPRIME: "https://www.amazon.de/gp/prime/pipeline/landing?primeCampaignId=prime_assoc_ft&tag=upgradeyou07d-21",
    AUDIBLEHOERBUECHER: "https://www.amazon.de/hz/audible/mlp?tag=upgradeyou07d-21",
    KINDLEUNLIMITED: "https://www.amazon.de/kindle-dbs/hz/signup?&tag=upgradeyou07d-21",
    PRIMESTUDENT: "https://www.amazon.de/joinstudent?tag=upgradeyou07d-21",
    PRIMEVIDEO: "https://www.amazon.de/gp/video/primesignup?tag=upgradeyou07d-21",
    PRIMEVIDEOCHANNELS: "https://www.amazon.de/channels?tag=upgradeyou07d-21",
  },


  AFFILIATE_VIRAL: {
    STERNENHIMMELPROJEKTOR: "https://www.amazon.de/Sternenhimmel-300-Lichtmodi-Partylicht-Sternenprojektor-Lichterkette/dp/B0DZTJ44GD?crid=2Y4UWG1Z9QUNS&dib=eyJ2IjoiMSJ9.N83-krJZ8x4zO26pOPkpUv0L4c9qpu9orqPX8MwS2jSts5XEr5J_G4GzWjfOB3ZBkQbxNknV5kDMtnW0LoHgXES0bTON3xyOBv3vBQOcE-j9RpzDDmZzuPKy_Ol0NgEyJZVMiyfE131uV7Mpgho-8ylTBgUFfnp-f-3qBvmZJYLYLVGMM19_Kl2JV7dgMEgc_S3FqXxGPsOLvmROM8CJIg7ipj-6B1kjVw0RIzpjzosNc4Iu_PDkJyZF95JzXJA5SPNWbvjq_IpIAZeaz6onu0fuzMysf6a_2Hg_CS2_bVo.YKqBnGP5XIw8CyGFJdGG9RvSGigH44oQclxhzcCU0Hw&dib_tag=se&keywords=schlafzimmer%2Bdeko&qid=1780682230&sprefix=schlafzimmer%2Caps%2C156&sr=8-47&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=7515e069a392e65d16f14428ed56ba7f&ref_=as_li_ss_tl",
    SQUISHYDUMPLING: "https://www.amazon.de/%C3%9Cberraschungs-Anti-Stress-Spielzeug-Dumplings-Versandschutz/dp/B0GZX2P6RN?crid=3U6YQXZ8MA9DT&dib=eyJ2IjoiMSJ9.HaUjuclNmV6ge-m9IvrVNgks97q4UTzNS6wGmo9d58_I4SKKvTnCTrjr-N1TBhIHXfCOPJcXCPXz4mhz2nUyIrTLiKmaEYdn84TXJl14dDz5EIvm_PpwkvOyz0aI3jxy9uK_kRqa1-gZnHvGfgH2xUOV5Bsx9rwoywBldsydTnuMlooLjsUdqeQDNZ5r5IXfDlan5xMQ5DhK-OsQ_dVuleQEmOF-qshN_YhLI14ZOLgQ4JMQG9m-N3KPn3mjGnHu6IE3RitixYZe0DFpbCfxCTEdZA71z8e6oz7Bqv-rkms.mE8a9kBmilgCpWwFn8iLMKMNpyf6QxE5tsIi96GOXQ8&dib_tag=se&keywords=viral%2Bsquishy&qid=1780908055&sprefix=viral%2B%2Caps%2C104&sr=8-1-spons&aref=xT4aY3QhAn&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=0eb59cfef3d5e88dc6d2180216a9398c&ref_=as_li_ss_tl",
    STANLEY: "https://www.amazon.de/Stanley-Quencher-FlowState-Trinkflasche-Strohhalm/dp/B0DPXPY6VJ?crid=5ROVQSXQ6QZL&dib=eyJ2IjoiMSJ9.D4l0tZd_RfSP-llG-ObCQ-aDrgeTG16ohTU3L1pLwjslfUPw8OHrcW59eD8BR63SM0fpskZDqkZ9VGr5RZsppCw6jOHKcqUMdxDJMiClSd5z1grnbeofm4wSBCLnCk7kMQjKFTwcgkneVEJQp1Qtwl9PnkYXKUKhnkWzxvMyZmdQuOrEq3xPrJ-Moo6MQHDSR0iy0fslOmxD1tdysMnbXsfoelWDv_3-HJXCSXMH6yBC1JauDf3LdgYdty8y0DyaFDN5y0QgbiIP_wSZwYmCbu3MvF3zHCJmcl1l0DSzdI8.wfITdgmReghCXkKKfTGvw50aCU86S0J4uyTnI_Vvs-w&dib_tag=se&keywords=virale%2Btiktok%2Bprodukte&qid=1780908133&sprefix=viral%2Caps%2C153&sr=8-25&ufe=app_do%3Aamzn1.fos.00b1ec55-3783-4b8e-9430-16820cd5ad16&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=bb7a6ce3e63be478f75a1b41ff728922&ref_=as_li_ss_tl",
  },


  AFFILIATE_WOHNZIMMER: {
    BESITELLTISCH:"https://www.amazon.de/VASAGLE-Beistelltisch-Couchtisch-Wohnzimmertisch-Schlafzimmer/dp/B0BBTD77GX?crid=1TDA987PTF17C&dib=eyJ2IjoiMSJ9.MRsRXSnmIbzVmPPY-UfgTpuUJNdTB7hjNkdWzeK8x3fpDfTRDn7QuSi3pVc7bJl42GXx2MFO1mYZcqkkrHwx4BdvNGfUua7llK3w-q2jGSgc1ubE5z3aYq-AUT3JLEUm-K43mjLldjgqc4RFRbNPnDdJ--hPTiVrPJZtu8r5YJj3mX4hZKu_wbrIMZH1UXr8PU7eIwlyiLiZOVoq_ZPMxHVCILS2UfSg7x7lCjqkp8pHpoiXxaCo4Y13dMHHmwqVuexC2bBCVyfSGxHoglvFGQXiTSdJIs7WM_YKIF7C9O8.qUwghiMynnZYf5JYmHZx8Pz71vEHFqN0PD2vzZxDBUM&dib_tag=se&keywords=wohnzimmer%2Bbeistelltisch&qid=1780737919&sprefix=wohnzimmer%2Bbeis%2Caps%2C133&sr=8-6&ufe=app_do%3Aamzn1.fos.ea9abfbb-43f8-4f98-b704-e3b5d571b56e&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=2cdab92c07076be64fd323dc3036c4ba&ref_=as_li_ss_tl",
    DEKOBUECHER: "https://www.amazon.de/PTShadow-Dekorative-%C3%84sthetische-Moderne-Couchtisch/dp/B0FHPRYLB3?crid=7WRKDAFE7LLA&dib=eyJ2IjoiMSJ9.HaEaQWPFRMkHGQ1kz9nnJNFPWm7xPoe76xVgJEhyzUJSiPBQLJTKf1lZYHor-1UN2GCD0hBrLfsvpQg4KPCWQwOYqAPPQ8f0umt-e3sI6iVqhBUTAc5s7b2f-li1mLFeCL6wwMhBhH8yt789dl2_E8FNkrO2F4Gsgt5Z4-Rw1gFdQh8xIUm7sYkwhq02-oLVsCA_3Sz6ig3kTvEQFstTdyhLJEdUbOsrqiCht_gT6Wo_b1p8_GibhFcwbqftz9TLB8v3N6JxmEsH6uWl-TyxVdmSsyR-qsK6PLOBCKtqeS0.p_Q5jjshwr_IAxK7-RFcMxItiQ_zIX05tIm5subNjQ8&dib_tag=se&keywords=home%2Bdecoration&qid=1778405193&sprefix=home,aps,162&sr=8-14-spons&aref=xRQ8Wz7j9a&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=d195fdcd8708426ecd85dfa71057fc5d&ref_=as_li_ss_tl",
    DEKORATIVEAESTETISCHEVASE: "https://www.amazon.de/Hanaomaoyi-Pampasgras%EF%BC%8C20cm-Blumenvase-Wohnzimmer-Schlafzimmer/dp/B0CPHWKCDR?_encoding=UTF8&pd_rd_w=6114B&content-id=amzn1.sym.99746e95-dbd1-4846-abee-b09b9b7a9d79&pf_rd_p=99746e95-dbd1-4846-abee-b09b9b7a9d79&pf_rd_r=BJY4RN9RZNQB111A4BTH&pd_rd_wg=7x56D&pd_rd_r=46554357-eb2e-4d5f-9f9d-aa3253b9f691&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=09784e9c27c2b3fea4b7734a1b78363f&ref_=as_li_ss_tl",
    KERZENWAERMELAMPE: "https://www.amazon.de/dp/B0GCDBPC7D?pd_rd_i=B0GCDBPC7D&pd_rd_w=1DDym&content-id=amzn1.sym.bf6dbf94-e926-4351-8952-c09f45cdef70&pf_rd_p=bf6dbf94-e926-4351-8952-c09f45cdef70&pf_rd_r=EA1GTD1JJBTBXFDQ7R1J&pd_rd_wg=e1Y3m&pd_rd_r=17c0d353-c5ce-4d72-af6e-a59f97595465&aref=0lIqFkzBKp&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=b2300239c88c67cec9cfc84a7c7553a2&ref_=as_li_ss_tl",
    OLIVENBAUM: "https://www.amazon.de/YOLEO-Olivenbaum-kunstpflanze-K%C3%BCnstlicher-Schlafzimmer/dp/B0CBK8XQPM?crid=1E8TW5DMF6P23&dib=eyJ2IjoiMSJ9.Vau3qBP3zYA1AI1To5bGUjdAZRDBa5BIph0SPhTt96EXbXmHBFoKwBncEZjxhU9yCGaqEm7qwrXdIqalT0SkNxsCcqSEWzQvwWiB7NbqO64agZG3kufqtT2Vc-mremUWTEyKFvyTRA9eNmUyrEGDQsiGMitLMMzhsqQOKhKO--UHtDcdhC695V56F-5Zo0HP9JbDxORW9JHzFT41ALrzK7WSOMDbJtdrKqe4n714k6XhhGUR22Fl0W5J4b22z-emNg6Q7hwGWksL9QkN3XsbwLyQboTArQfREbzWhYRI9C4.Q1ZgPE8NNe4S3KsTSSK_dNnjmVg-Y_HsgibwGdB-1a4&dib_tag=se&keywords=home%2Bfinds%2Baesthetic&qid=1777978287&sprefix=home%2Bfinds%2B,aps,148&sr=8-15&th=1&linkCode=ll2&tag=upgradeyou07d-21&linkId=47261665816ae0906d5eb61b40fc02d6&ref_=as_li_ss_tl",
  },

};


// ════════════════════════════════════════════════════════════
// 2. DATEN – Produkte
// ════════════════════════════════════════════════════════════

const PRODUCTS = {

  ALLTAGSHELFER: {

    REINIGUNGSKNETE: {
      title:       "Reinigungsknete für Handy & Kopfhörer",
      description: "Praktisches Reinigungsset zur rückstandsfreien Säuberung von Lautsprechern, Ladebuchsen und anderen schwer erreichbaren Stellen.",
      price:       "ab 13,95 €",
      image:       "images/products/alltagshelfer/reinigungsknete.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.REINIGUNGSKNETE",
    },

    FUSSELROLLE: {
      title:       "Tierhaarentferner",
      description: "Wiederverwendbare Fusselrolle zur schnellen und effektiven Entfernung von Hunde- und Katzenhaaren auf Sofas, Betten, Teppichen und anderen Textiloberflächen.",
      price:       "ab 23,99 €",
      image:       "images/products/alltagshelfer/fusselrolle.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.FUSSELROLLE",
    },

    RUECKENKRATZER: {
      title:       "Ausziehbarer Rückenkratzer mit 5 Kratzköpfen",
      description: "Vielseitiger Rückenkratzer aus robustem Edelstahl mit austauschbaren Aufsätzen für individuellen Komfort, ideal als Geschenk.",
      price:       "ab 15,99 €",
      image:       "images/products/alltagshelfer/rueckenkratzer.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.RUECKENKRATZER",
    },

    NOTFALLHAMMERAUTO: {
      title:       "2er-Pack Notfallhammer mit Gurtschneider",
      description: "Kompaktes Rettungswerkzeug zum schnellen Durchtrennen von Sicherheitsgurten und Zertrümmern von Autoscheiben für eine sichere Flucht im Notfall.",
      price:       "ab 39,99 €",
      image:       "images/products/alltagshelfer/notfallhammer.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.NOTFALLHAMMERAUTO",
    },

    WISCHER: {
      title:       "Wischer mit Sprühfunktion",
      description: "Praktischer Bodenwischer mit integriertem Wassertank und wiederverwendbaren Wischpads für die schnelle und gründliche Reinigung verschiedener Bodenbeläge.",
      price:       "ab 23,99 €",
      image:       "images/products/alltagshelfer/wischer.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.WISCHER",
    },

    GREIFZANGE: {
      title:       "Faltbare Greifzange 91 cm",
      description: "Ergonomischer Greifer mit starkem Griff und 360°-Drehkopf zum komfortablen Aufheben und Erreichen von Gegenständen im Alltag.",
      price:       "ab 9,99 €",
      image:       "images/products/alltagshelfer/griffzange.jpg",
      linkKey:     "AFFILIATE_ALLTAGSHELFER.GREIFZANGE",
    },

  },
 

  BESTSELLER: {

    AUFBEWAHRUNGSBOXEN: {
      title:       "10er-Set Aufbewahrungsboxen",
      description: "Robuste Kunststoffkörbe zur flexiblen und platzsparenden Organisation von Badezimmer-, Küchen- oder Haushaltsgegenständen.",
      price:       "ab 34,99 €",
      image:       "images/products/viral/aufbewahrungsboxen.jpg",
      linkKey:     "AFFILIATE_BESTSELLER.AUFBEWAHRUNGSBOXEN",
    },

    ULTRASCHALLREINIGUNGSGERAET: {
      title:       "Ultraschallreinigungsgerät",
      description: "Effektiver Ultraschallreiniger zur schonenden und gründlichen Reinigung von Brillen, Schmuck, Uhren und weiteren wasserfesten Gegenständen.",
      price:       "ab 49,99 €",
      image:       "images/products/viral/ultraschallreinigungsgerät.jpg",
      linkKey:     "AFFILIATE_BESTSELLER.ULTRASCHALLREINIGUNGSGERAET",
      btnStyle:    "btn-green",
    },

    LUFTBEFEUCHTER: {
      title:       "Luftbefeuchter 2,5 L",
      description: "Leiser Top-Fill-Humidifier mit 360°-Düse und langer Laufzeit für eine angenehme Luftfeuchtigkeit in Schlafzimmer, Kinderzimmer oder für Pflanzen.",
      price:       "ab 39,99 €",
      image:       "images/products/viral/luftbefeuchter.jpg",
      linkKey:     "AFFILIATE_BESTSELLER.LUFTBEFEUCHTER",
    },

  },


  BADEZIMMER: {
 
    ABWISCHER: {
      title:       "Abzieher mit Aufhänger",
      description: "Hochwertiger Dusch- und Fensterabzieher aus Silikon für eine streifenfreie Reinigung von Glasflächen, mit rutschfestem Griff und praktischer Aufhängung.",
      price:       "ab 11,99 €",
      image:       "images/products/badezimmer/abwischer.jpg",
      linkKey:     "AFFILIATE_BADEZIMMER.ABWISCHER",
    },
 
    HANDTUCHHALTER: {
      title:       "6er-Set Handtuchhalter ohne Bohren",
      description: "Selbstklebende Handtuchhaken aus Edelstahl mit hoher Tragkraft für die platzsparende und bohrfreie Befestigung von Handtüchern im Badezimmer.",
      price:       "ab 10,99 €",
      image:       "images/products/badezimmer/handtuchHalter.jpg",
      linkKey:     "AFFILIATE_BADEZIMMER.HANDTUCHHALTER",
    },
 
    SAUGNAPFDUSCHKADDY: {
      title:       "2er-Set Duschablage ohne Bohren",
      description: "Rostfreie Edelstahl-Duschregale mit hoher Tragkraft und viel Stauraum für Shampoo, Duschgel und Badutensilien, einfach und ohne Bohren montierbar.",
      price:       "ab 13,99 €",
      image:       "images/products/badezimmer/saugnapfDuschkaddy.jpg",
      linkKey:     "AFFILIATE_BADEZIMMER.SAUGNAPFDUSCHKADDY",
    },

    TOILETTENPAPIERHALTER: {
      title:       "Toilettenpapierhalter",
      description: "Moderner Toilettenpapierhalter aus Edelstahl zur einfachen Montage ohne Bohren, mit starker Klebebefestigung für Bad und WC.",
      price:       "ab 10,99 €",
      image:       "images/products/badezimmer/toilettenpapierhalter.jpg",
      linkKey:     "AFFILIATE_BADEZIMMER.TOILETTENPAPIERHALTER",
    },

    WAESCHEKORB: {
      title:       "Wäschekorb mit Deckel (105 L)",
      description: "Großer, faltbarer Wäschesammler mit stabilem Kunststoffrahmen und Deckel für eine ordentliche und platzsparende Aufbewahrung von Schmutzwäsche.",
      price:       "ab 24,99 €",
      image:       "images/products/badezimmer/waeschekorb.jpg",
      linkKey:     "AFFILIATE_BADEZIMMER.WAESCHEKORB",
    },
 
  },


  COZYLIFESTYLE: {
 
    TAGEBUCH: {
      title:       "6 Minuten Tagebuch 2026",
      description: "Geführtes Dankbarkeits- und Achtsamkeitstagebuch zur Förderung von Selbstreflexion, Resilienz und positiven Gewohnheiten im Alltag.",
      price:       "ab 27,90 €",
      image:       "images/products/cozyLifestyle/6MinutenTagebuch.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.TAGEBUCH",
    },
 
    BIODANCEMASKE: {
      title:       "4er-Pack Biodance Bio-Collagen Real Deep Mask",
      description: "Pflegende Gesichtsmaske mit Kollagen zur intensiven Feuchtigkeitsversorgung und für ein glatteres, strahlenderes Hautbild.",
      price:       "ab 13,00 €",
      image:       "images/products/cozyLifestyle/biodanceMaske.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.BIODANCEMASKE",
    },

    MASSAGEBUERSTE: {
      title:       "Kopfhaut-Massagebürste",
      description: "Sanfte Massagebürste zur Förderung der Kopfhautpflege und Durchblutung, geeignet für alle Haartypen und die Anwendung auf nassem oder trockenem Haar.",
      price:       "ab 8,99 €",
      image:       "images/products/cozyLifestyle/massagebürste.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.MASSAGEBUERSTE",
    },

    ZUNGENSCHABER: {
      title:       "2er-Pack Zungenschaber mit Etui",
      description: "Hochwertiger Zungenschaber aus Edelstahl zur gründlichen Entfernung von Zungenbelägen und für ein frisches Mundgefühl im Alltag.",
      price:       "ab 9,99 €",
      image:       "images/products/cozyLifestyle/zungenschaber.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.ZUNGENSCHABER",
    },

    AUGENPADS: {
      title:       "Hydrogel Augenpads",
      description: "Pflegende Eye Patches mit Peptiden und Koffein zur Erfrischung der Augenpartie sowie zur Minderung von Schwellungen und Müdigkeitserscheinungen.",
      price:       "ab 23,00 €",
      image:       "images/products/cozyLifestyle/augenpads.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.AUGENPADS",
    },

    TANGLETEEZER: {
      title:       "Tangle Teezer Ultimate Detangler",
      description: "Entwirrungsbürste für nasses und trockenes Haar, die Knoten sanft löst, Haarbruch reduziert und für alle Haartypen geeignet ist.",
      price:       "ab 17,00 €",
      image:       "images/products/cozyLifestyle/tangleTeezer.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.TANGLETEEZER",
    },
 
    KUSCHELDECKE: {
      title:       "Kuscheldecke 125 × 150 cm",
      description: "Weiche Flanell-Fleecedecke mit stilvollem Cordmuster, ideal als gemütliche Sofadecke, Wohnaccessoire oder leichter Überwurf für jede Jahreszeit.",
      price:       "ab 13,99 €",
      image:       "images/products/cozyLifestyle/kuscheldecke.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.KUSCHELDECKE",
    },
 
    MASSAGEGERÄT: {
      title:       "Nackenmassagegerät mit Wärmefunktion",
      description: "Shiatsu-Massagegerät mit 3D-Massagetechnik zur wohltuenden Entspannung von Nacken, Rücken, Schultern und Beinen.",
      price:       "ab 42,99 €",
      image:       "images/products/cozyLifestyle/massagegerät.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.MASSAGEGERÄT",
      btnStyle:    "btn-green",
    },

    LESELAMPE: {
      title:       "Leselampe mit Klemme",
      description: "Flexible LED-Leselampe mit Touch-Steuerung, mehreren Farb- und Helligkeitsstufen sowie augenschonendem Licht für Lesen, Arbeiten und Entspannen.",
      price:       "ab 19,99 €",
      image:       "images/products/cozyLifestyle/leselampe.jpg",
      linkKey:     "AFFILIATE_COZYLIFESTYLE.LESELAMPE",
    },
 
  },


  GARTEN: {
 
    SOLARLICHTERKETTE: {
      title:       "Solar-Lichterkette Außen",
      description: "Wetterfeste LED-Lichterkette mit 16 warmweißen Glühbirnen für eine stimmungsvolle Beleuchtung von Garten, Balkon, Terrasse und besonderen Anlässen.",
      price:       "ab 25,99 €",
      image:       "images/products/garten/lichterkette.jpg",
      linkKey:     "AFFILIATE_GARTEN.SOLARLICHTERKETTE",
    },

    SOLARSPRINGBRUNNEN: {
      title:       "Solar Springbrunnen mit 6 Wassereffekten",
      description: "Schwimmende Solar-Wasserpumpe für Teiche, Vogeltränken und kleine Wasserbecken, die ohne Stromanschluss dekorative Fontänen erzeugt.",
      price:       "ab 17,99 €",
      image:       "images/products/garten/springbrunnen.jpg",
      linkKey:     "AFFILIATE_GARTEN.SOLARSPRINGBRUNNEN",
    },

    HÄNGENDESOLARLAMPE: {
      title:       "2er-Set Solarlaternen für Außen",
      description: "Wetterfeste Solarleuchten im dekorativen Metall-Design mit LED-Beleuchtung für eine stimmungsvolle Atmosphäre auf Terrasse, Balkon, im Garten oder Hof.",
      price:       "ab 30,90 €",
      image:       "images/products/garten/hängelampen.jpg",
      linkKey:     "AFFILIATE_GARTEN.HÄNGENDESOLARLAMPE",
    },

  },
 

  HOMEOFFICE: {
 
    ETIKETTIERGERAET: {
      title:       "Etikettendrucker",
      description: "Kompakter Bluetooth-Etikettendrucker zur einfachen Erstellung und Organisation von selbstklebenden Beschriftungen für Zuhause, Büro und Hobby.",
      price:       "ab 17,99 €",
      image:       "images/products/homeoffice/etikettiergeraet.jpg",
      linkKey:     "AFFILIATE_HOMEOFFICE.ETIKETTIRGERAET",
    },
 
    KABELCLIPS: {
      title:       "5er-Set Kabel-Clips",
      description: "Selbstklebende Kabelhalter zur ordentlichen Führung und Organisation von Lade-, USB- und anderen Kabeln am Schreibtisch, Nachttisch, im Auto oder Büro.",
      price:       "ab 7,99 €",
      image:       "images/products/homeoffice/kabelclips.jpg",
      linkKey:     "AFFILIATE_HOMEOFFICE.KABELCLIPS",
    },

    SCHREIBTISCHORGANIZER: {
      title:       "Schreibtisch-Organizer aus Bambus",
      description: "Multifunktionaler Organizer mit mehreren Fächern zur übersichtlichen Aufbewahrung von Stiften, Fernbedienungen, Kosmetikartikeln und weiteren Alltagsgegenständen.",
      price:       "ab 13,99 €",
      image:       "images/products/homeoffice/schreibtischOrganizer.jpg",
      linkKey:     "AFFILIATE_HOMEOFFICE.SCHREIBTISCHORGANIZER",
    },
 
    SCHREIBTISCHUNTERLAGE: {
      title:       "Schreibtischunterlage 80 × 40 cm",
      description: "Hochwertige Schreibtischunterlage mit Lederoberfläche und rutschfester Unterseite, ideal als Mauspad, Schreibunterlage und Schutz für den Arbeitsplatz im Büro oder Homeoffice.",
      price:       "ab 14,99 €",
      image:       "images/products/homeoffice/schreibtischunterlage.jpg",
      linkKey:     "AFFILIATE_HOMEOFFICE.SCHREIBTISCHUNTERLAGE",
    },
 
    WHITEBOARD: {
      title:       "Magnet-Whiteboard 60 × 45 cm",
      description: "Trocken abwischbares Whiteboard mit Magnetfunktion, ideal für Notizen, Planung und Organisation im Büro, Homeoffice oder Zuhause.",
      price:       "ab 31,89 €",
      image:       "images/products/homeoffice/whiteboard.jpg",
      linkKey:     "AFFILIATE_HOMEOFFICE.WHITEBOARD",
    },
 
  },


  KUECHE: {
 
    GEWUERTZSTAENDER: {
      title:       "Gewürzregal",
      description: "Drehbarer 3-stufiger Organizer zur platzsparenden Aufbewahrung von Gewürzen, Küchenutensilien oder Kosmetikartikeln auf Arbeitsflächen und Tischen.",
      price:       "ab 44,99 €",
      image:       "images/products/küche/gewuerzStaender.jpg",
      linkKey:     "AFFILIATE_KUECHE.GEWUERTZSTAENDER",
    },
 
    GLASOELFLASCHE: {
      title:       "2-in-1 Ölsprüher",
      description: "Praktische Glasflasche mit Sprüh- und Ausgießfunktion zur präzisen Dosierung von Öl beim Kochen, Grillen, Backen und in der Heißluftfritteuse.",
      price:       "ab 10,99 €",
      image:       "images/products/küche/glasOelflaschen.jpg",
      linkKey:     "AFFILIATE_KUECHE.GLASOELFLASCHE",
    },

    GLASTRINKBECHER: {
      title:       "2er-Set Glasbecher (600 ml)",
      description: "Robuste, gerippte Trinkgläser mit Deckel und Strohhalm für Smoothies, Kaffee und kalte Getränke, mit auslaufsicherem Design für den Alltag.",
      price:       "ab 19,99 €",
      image:       "images/products/küche/glasTrinkBecher.jpg",
      linkKey:     "AFFILIATE_KUECHE.GLASTRINKBECHER",
    },
 
    KUECHENUTENSILIENHALTER: {
      title:       "Küchenutensilienhalter",
      description: "Stilvoller Organizer zur praktischen Aufbewahrung von Kochlöffeln, Pfannenwendern und anderen Küchenhelfern, passend für moderne Küchen.",
      price:       "ab 17,99 €",
      image:       "images/products/küche/kuechenutensilienhalter.jpg",
      linkKey:     "AFFILIATE_KUECHE.KUECHENUTENSILIENHALTER",
    },
 
    MILCHAUFSCHAUMER: {
      title:       "4-in-1 Milchaufschäumer",
      description: "Elektrischer Milchaufschäumer mit Heiz- und Kaltfunktion für cremigen Milchschaum, heiße Milch oder Kakao, ideal für Cappuccino und Latte.",
      price:       "ab 39,99 €",
      image:       "images/products/küche/milchAufschaeumer.jpg",
      linkKey:     "AFFILIATE_KUECHE.MILCHAUFSCHAUMER",
    },
 
    SERVICEPLATTE: {
      title:       "2-stöckige Etagere aus Metall",
      description: "Stilvoller Servierständer für Kuchen, Cupcakes und Snacks, ideal als dekorative Tischpräsentation für besondere Anlässe und den Alltag.",
      price:       "ab 37,89 €",
      image:       "images/products/küche/servierPlatte.jpg",
      linkKey:     "AFFILIATE_KUECHE.SERVICEPLATTE",
    },
 
    SILIKONBACKMATTE: {
      title:       "3er-Set Silikon-Backmatten",
      description: "Wiederverwendbare, antihaftbeschichtete Backmatten für einfaches und gleichmäßiges Backen ohne zusätzliches Backpapier.",
      price:       "ab 16,61 €",
      image:       "images/products/küche/silikonBackmatte.jpg",
      linkKey:     "AFFILIATE_KUECHE.SILIKONBACKMATTE",
    },
 
    STABMILCHAUFSCHAUMER: {
      title:       "Elektrischer Stab-Milchaufschäumer",
      description: "Handlicher Getränkemixer zum schnellen Aufschäumen von Milch und Zubereiten von Latte, Cappuccino, Matcha und weiteren Heiß- oder Kaltgetränken.",
      price:       "ab 9,99 €",
      image:       "images/products/küche/stabMilchaufschaeumer.jpg",
      linkKey:     "AFFILIATE_KUECHE.STABMILCHAUFSCHAUMER",
    },
 
  },


  SCHLAFZIMMER: {
 
    SEIDENKISSENBEZUG: {
      title:       "SeidenKissenbezug 40 × 80 cm",
      description: "Hochwertiger Maulbeerseiden-Kissenbezug beidseitig aus Seide mit Reißverschluss, der Haut und Haaren zusätzlichen Komfort und Pflege im Schlaf bietet.",
      price:       "ab 26,99 €",
      image:       "images/products/schlafzimmer/seidenKissenbezug.jpg",
      linkKey:     "AFFILIATE_SCHLAFZIMMER.SEIDENKISSENBEZUG",
    },

    STANDSPIEGEL: {
      title:       "Ganzkörperspiegel 180 × 76 cm",
      description: "Eleganter, gewölbter Stand- und Wandspiegel in voller Länge, ideal zum Anlehnen oder Aufhängen im Schlafzimmer, Ankleidebereich oder Wohnzimmer.",
      price:       "ab 145,99 €",
      image:       "images/products/schlafzimmer/standspiegel.jpg",
      linkKey:     "AFFILIATE_SCHLAFZIMMER.STANDSPIEGEL",
    },

    NACHTLICHTSTECKDOSE: {
      title:       "Kurzflor-Teppich 160 × 220 cm",
      description: "Superweicher, waschbarer Teppich in Felloptik mit rutschfester Unterseite für ein gemütliches Wohnambiente im Wohnzimmer oder Schlafzimmer.",
      price:       "ab 29,94 €",
      image:       "images/products/schlafzimmer/nachtlichtSteckdose.jpg",
      linkKey:     "AFFILIATE_SCHLAFZIMMER.NACHTLICHTSTECKDOSE",
    },

    KUSCHLIGERKURZFLORTEPPICH: {
      title:       "2er-Set Nachtlicht Steckdose",
      description: "LED-Nachtlichter mit Bewegungs- und Dämmerungssensor sowie einstellbarer Helligkeit für sichere und energieeffiziente Beleuchtung in Flur, Treppe und Schlafzimmer.",
      price:       "ab 19,99 €",
      image:       "images/products/schlafzimmer/kurzflorteppich.jpg",
      linkKey:     "AFFILIATE_SCHLAFZIMMER.KUSCHLIGERKURZFLORTEPPICH",
    },
 
  },


  SERVICES: {
 
    AMAZONBABYWUNSCHLISTE: {
      title:       "Amazon Babywunschliste",
      icon:        "📖",
      description: "Mit der Amazon Babywunschliste behalten werdende Eltern alles im Blick – von der Erstausstattung bis zu den kleinen Lieblingsprodukten fürs Baby. Freunde und Familie können passende Geschenke ganz einfach auswählen und direkt liefern lassen.",
      price:       "ab 19,99 €",
      image:       "images/products/services/amazonBabyWunschliste.jpg",
      linkKey:     "AFFILIATE_SERVICE.AMAZONBABYWUNSCHLISTE",
    },

    AMAZONHOCHZEITSLISTE: {
      title:       "Amazon Hochzeitsliste",
      icon:        "📖",
      description: "Die Amazon Hochzeitsliste macht die Planung persönlicher und entspannter. Erstellt gemeinsam eure Wunschliste, teilt sie mit Gästen und freut euch über Geschenke, die wirklich zu euch passen.",
      price:       "ab 19,99 €",
      image:       "images/products/services/amazonHochzeitsliste.jpg",
      linkKey:     "AFFILIATE_SERVICE.AMAZONHOCHZEITSLISTE",
    },

    AMAZONKIDS: {
      title:       "Amazon Kids",
      icon:        "📖",
      description: "Kindgerechte Inhalte für jedes Alter – von Büchern über Lernspiele bis zu Videos. Eltern profitieren von sicheren Einstellungen und einer geschützten Umgebung für ihre Kinder.",
      price:       "ab 19,99 €",
      image:       "images/products/services/amazonKids.jpg",
      linkKey:     "AFFILIATE_SERVICE.AMAZONKIDS",
    },

    AMAZONMUSIKUNLIMITED: {
      title:       "Amazon Music Unlimited",
      icon:        "📖",
      description: "Genieße deine Lieblingsmusik ganz ohne Werbung – online und offline. Entdecke aktuelle Hits, Podcasts und individuelle Playlists für jede Stimmung.",
      price:       "ab 19,99 €",
      image:       "images/products/services/amazonMusicUnlimited.jpg",
      linkKey:     "AFFILIATE_SERVICE.AMAZONMUSIKUNLIMITED",
    },

    AMAZONPRIME: {
      title:       "Amazon Prime",
      icon:        "📖",
      description: "Verbinde schnellen Versand mit exklusivem Entertainment, Angeboten und vielen weiteren Vorteilen. Filme, Serien, Musik und mehr – alles in einem Paket.",
      price:       "ab 19,99 €",
      image:       "images/products/services/amazonPrime.jpg",
      linkKey:     "AFFILIATE_SERVICE.AMAZONPRIME",
    },

    AUDIBLEHOERBUECHER: {
      title:       "Audible Hörbücher",
      icon:        "📖",
      description: "Tauche in spannende Hörbücher, Podcasts und exklusive Originals ein. Perfekt für unterwegs, beim Sport oder zum Entspannen zuhause.",
      price:       "ab 19,99 €",
      image:       "images/products/services/audibleHörbücher.jpg",
      linkKey:     "AFFILIATE_SERVICE.AUDIBLEHOERBUECHER",
    },

    KINDLEUNLIMITED: {
      title:       "Kindle Unlimited",
      icon:        "📖",
      description: "Zugriff auf eine riesige Auswahl an eBooks, Magazinen und Hörbüchern. Ideal für alle, die gerne neue Geschichten und Autoren entdecken möchten.",
      price:       "ab 19,99 €",
      image:       "images/products/services/audibleHörbücher.jpg",
      linkKey:     "AFFILIATE_SERVICE.KINDLEUNLIMITED",
    },

    PRIMESTUDENT: {
      title:       "Prime Student",
      icon:        "📖",
      description: "Prime-Vorteile speziell für Studierende kombiniert Unterhaltung, schnelle Lieferungen und exklusive Rabatte zu einem vergünstigten Preis für Studierende. Perfekt für Studium, Freizeit und Alltag.",
      price:       "ab 19,99 €",
      image:       "images/products/services/primeStudent.jpg",
      linkKey:     "AFFILIATE_SERVICE.PRIMESTUDENT",
    },

    PRIMEVIDEO: {
      title:       "Prime Video",
      icon:        "📖",
      description: "Streame preisgekrönte Serien, Blockbuster und exklusive Originals jederzeit auf deinem Lieblingsgerät. Unterhaltung für die ganze Familie – wann immer du willst.",
      price:       "ab 19,99 €",
      image:       "images/products/services/primeVideo.jpg",
      linkKey:     "AFFILIATE_SERVICE.PRIMEVIDEO",
    },

    PRIMEVIDEOCHANNELS: {
      title:       "Prime Video Channels",
      icon:        "📖",
      description: "Hier buchst du zusätzliche Streaming-Kanäle ganz einfach dazu – ohne langfristige Verträge. So stellst du dir dein persönliches Entertainment-Angebot selbst zusammen.",
      price:       "ab 19,99 €",
      image:       "images/products/services/primeVideoChannels.jpg",
      linkKey:     "AFFILIATE_SERVICE.PRIMEVIDEOCHANNELS",
    },

  },


  VIRAL: {

    STERNENHIMMELPROJEKTOR: {
      title:       "Sternenhimmel Projektor mit 300 Lichtmodi",
      description: "Atmosphärisches LED-Nachtlicht mit Sternenhimmel-Effekt und White-Noise-Funktion für eine entspannte Raum- und Schlafatmosphäre.",
      price:       "ab 57,99 €",
      image:       "images/products/viral/sternenhimmelProjektor.jpg",
      linkKey:     "AFFILIATE_VIRAL.STERNENHIMMELPROJEKTOR",
    },

    SQUISHYDUMPLING: {
      title:       "Mystery Squishy Dumpling XXL",
      description: "Weiches Anti-Stress-Spielzeug im niedlichen Dumpling-Design als Überraschungsartikel zum Sammeln, ideal zum Drücken, Spielen und Entspannen.",
      price:       "ab 14,99 €",
      image:       "images/products/viral/squishyDumplings.jpg",
      linkKey:     "AFFILIATE_VIRAL.SQUISHYDUMPLING",
    },

    STANLEY: {
      title:       "STANLEY Flowstate (1, 2 L)",
      description: "Hochwertiger Edelstahl-Thermobecher mit Strohhalm, der Getränke lange kühl hält und sich ideal für unterwegs, Büro und Alltag eignet.",
      price:       "ab 55,00 €",
      image:       "images/products/viral/stanley.jpg",
      linkKey:     "AFFILIATE_VIRAL.STANLEY",
    },
    
  },


  WOHNZIMMER: {

    BESITELLTISCH: {
      title:       "Runder Beistelltisch",
      description: "Moderner kleiner Couchtisch mit integriertem Stoffkorb als Stauraum, ideal als Nachttisch oder Wohnzimmertisch für eine stilvolle und funktionale Einrichtung.",
      price:       "ab 29,99 €",
      image:       "images/products/wohnzimmer/beistelltisch.jpg",
      linkKey:     "AFFILIATE_WOHNZIMMER.BESITELLTISCH",
    },

    DEKOBUECHER: {
      title:       "3er-Set Deko-Bücher",
      description: "Stilvolle, dekorative Attrappen im Buchdesign für eine moderne und ästhetische Wohnraum- oder Couchtisch-Dekoration.",
      price:       "ab 23,99 €",
      image:       "images/products/wohnzimmer/dekoBuecher.jpg",
      linkKey:     "AFFILIATE_WOHNZIMMER.DEKOBUECHER",
    },

    DEKORATIVEAESTETISCHEVASE: {
      title:       "20 cm Keramikvase im modernen Design",
      description: "Matte, weiße Blumenvase im Boho- und Nordic-Stil, ideal für Pampasgras und stilvolle Wohnraumdekoration.",
      price:       "ab 11,99 €",
      image:       "images/products/wohnzimmer/dekorativeAesthetischeVase.jpg",
      linkKey:     "AFFILIATE_WOHNZIMMER.DEKORATIVEAESTETISCHEVASE",
    },
 
    KERZENWAERMELAMPE: {
      title:       "Kerzenwärmer Lampe",
      description: "Elektrische Duftlampe im Vintage-Stil mit Timer- und Dimmfunktion zum sicheren Schmelzen von Duftkerzen und für eine stimmungsvolle Raumdekoration.",
      price:       "ab 32,99 €",
      image:       "images/products/wohnzimmer/kerzenWaermeLampe.jpg",
      linkKey:     "AFFILIATE_WOHNZIMMER.KERZENWAERMELAMPE",
    },
 
    OLIVENBAUM: {
      title:       "Künstlicher Olivenbaum 150 cm",
      description: "Realistisch aussehende Kunstpflanze für eine pflegeleichte und stilvolle Raumdekoration in Wohnzimmer, Schlafzimmer oder Büro.",
      price:       "ab 69,99 €",
      image:       "images/products/wohnzimmer/olivenbaum.jpg",
      linkKey:     "AFFILIATE_WOHNZIMMER.OLIVENBAUM",
    },

  },

};


// ════════════════════════════════════════════════════════════
// 3. NAVIGATION
// ════════════════════════════════════════════════════════════

function showPage(id, skipScroll) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });

  var targetPage = document.getElementById('page-' + id);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.warn('[nav] Seite nicht gefunden: page-' + id);
    return;
  }

  var navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');

  // URL-Hash aktualisieren (ohne erneutes Scrollen durch hashchange)
  var newHash = id === 'home' ? '#' : '#' + id;
  if (window.location.hash !== newHash && !(id === 'home' && window.location.hash === '')) {
    history.pushState(null, '', newHash);
  }

  if (!skipScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

function closeMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

function switchArticlePage(pageNumber) {
  document.querySelectorAll('.article-page').forEach(function(p) {
    p.classList.remove('visible');
  });

  var target = document.getElementById('article-page-' + pageNumber);
  if (target) target.classList.add('visible');

  document.querySelectorAll('#article-pagination .page-btn').forEach(function(btn) {
    btn.classList.remove('active');
    btn.removeAttribute('aria-current');
  });

  var activeBtn = document.querySelector(
    '#article-pagination .page-btn[data-article-page="' + pageNumber + '"]'
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-current', 'true');
  }
}

function scrollToSectionHeader() {
  var activePage = document.querySelector('.page.active');
  if (!activePage) return;

  var target = activePage.querySelector('.section-header');
  if (!target) return;

  var navHeight = 64;
  var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: top, behavior: 'smooth' });
}


// Delegierter Klick-Handler
document.addEventListener('click', function(e) {

  var el = e.target.closest(
    '[data-nav], [data-toggle-menu], [data-article-page], [data-scroll]'
  );
  if (!el) return;

  if (el.hasAttribute('data-nav')) {
    e.preventDefault();
    showPage(el.getAttribute('data-nav'));
    if (el.getAttribute('data-close-menu') === 'true') closeMenu();
    return;
  }

  if (el.hasAttribute('data-toggle-menu')) {
    e.preventDefault();
    toggleMenu();
    return;
  }

  if (el.hasAttribute('data-article-page')) {
    e.preventDefault();
    switchArticlePage(Number(el.getAttribute('data-article-page')));
    return;
  }

  if (el.hasAttribute('data-scroll')) {
    e.preventDefault();
    scrollToSectionHeader();
    return;
  }
});

// Menü bei Außenklick schließen
document.addEventListener('click', function(e) {
  var menu      = document.getElementById('mobileMenu');
  var hamburger = document.querySelector('[data-toggle-menu]');
  if (!menu || !hamburger) return;
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});


// ════════════════════════════════════════════════════════════
// 4. PRODUKT-RENDERING
// ════════════════════════════════════════════════════════════

function getNestedValue(obj, path) {
  return path.split('.').reduce(function(acc, part) {
    return acc != null ? acc[part] : undefined;
  }, obj);
}

function buildProductCard(product, link) {
  var btnClass = product.btnStyle || 'btn-primary';
  return '<div class="product-card">'
    + '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy">'
    + '<div class="product-card-body">'
    + '<h4>' + product.title + '</h4>'
    + '<p>' + product.description + '</p>'
    + '<div class="price-tag">' + product.price + '</div>'
    + '<a class="btn ' + btnClass + '" href="' + (link || '#') + '" target="_blank" rel="nofollow sponsored noopener">Jetzt ansehen →</a>'
    + '</div>'
    + '</div>';
}

function buildProductRow(product, link, isReverse) {
  var btnClass = product.btnStyle || 'btn-primary';
  var rowClass = isReverse ? 'product-row reverse' : 'product-row';
  return '<div class="' + rowClass + '">'
    + '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy">'
    + '<div class="product-row-content">'
    + '<h3>' + product.title + '</h3>'
    + '<p>' + product.description + '</p>'
    + '<div class="price-tag">' + product.price + '</div>'
    + '<a class="btn ' + btnClass + '" href="' + (link || '#') + '" target="_blank" rel="nofollow sponsored noopener">Jetzt ansehen →</a>'
    + '</div>'
    + '</div>';
}

function buildServiceCard(product, link) {
  var btnClass = product.btnStyle || 'btn-primary';
  return '<div class="service-card">'
  + '<img class="service-card-img" src="' + product.image + '" alt="' + product.title + '">'
  + '<div class="service-card-body">'
  + '<div class="icon">' + product.icon + '</div>'
  + '<h3>' + product.title + '</h3>'
  + '<p>' + product.description + '</p>'
  + '<a class="btn ' + btnClass + '" href="' + (link || '#') + '" target="_blank" rel="nofollow sponsored" style="width:100%;text-align:center; padding: 20px">30 Tage gratis testen →</a>'
  + '</div>'
  + '</div>';
}

function renderProducts() {
  var containers = document.querySelectorAll('[data-product]');

  containers.forEach(function(container) {
    var productPath = container.getAttribute('data-product');
    var type        = container.getAttribute('data-type') || 'card';
    var isReverse   = container.getAttribute('data-reverse') === 'true';

    var parts      = productPath.split('.');
    var productKey = parts.pop();
    var category   = parts.join('.');

    var product = category
      ? getNestedValue(PRODUCTS, category + '.' + productKey)
      : PRODUCTS[productKey];

    if (!product) {
      console.warn('[render] Produkt nicht gefunden: "' + productPath + '"');
      return;
    }

    var link = getNestedValue(EXTERNAL_LINKS, product.linkKey) || '#';

    var temp = document.createElement('div');

    if (type === 'row') {
      temp.innerHTML = buildProductRow(product, link, isReverse);
      container.replaceWith(temp.firstElementChild);
    } else if (type === 'service') {
      temp.innerHTML = buildServiceCard(product, link);
      container.replaceWith(temp.firstElementChild);
    } else {
      temp.innerHTML = buildProductCard(product, link);
      container.replaceWith(temp.firstElementChild);
    } 
  });
}

function resolveDataLinks() {
  document.querySelectorAll('[data-link]').forEach(function(el) {
    var url = getNestedValue(EXTERNAL_LINKS, el.getAttribute('data-link'));
    if (url) el.href = url;
  });
}


// ════════════════════════════════════════════════════════════
// 5. INIT – nach DOM-Aufbau starten
// ════════════════════════════════════════════════════════════

function getPageFromHash() {
  var hash = window.location.hash.replace('#', '').trim();
  return hash || 'home';
}

// Browser Vor/Zurück-Navigation
window.addEventListener('popstate', function() {
  showPage(getPageFromHash(), true);
});

document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  resolveDataLinks();

  // Beim Laden: Hash auswerten und richtige Seite anzeigen
  var startPage = getPageFromHash();
  if (startPage !== 'home') {
    showPage(startPage, true);
  }
});
