// src/routes/api/send-confirmation-email/+server.ts

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { BREVO_API_KEY } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';

function generateEmailHTML(): string {
	return `
<!doctype html>
<html lang="fr" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title></title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }

  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <style type="text/css">
    @media only screen and (min-width:420px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }

  </style>
  <style media="screen and (min-width:420px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

  </style>
  <style type="text/css">
    @media only screen and (max-width:419px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }

  </style>
</head>

<body style="word-spacing:normal;background-color:#FFFFFF;">
  <div style="background-color:#FFFFFF;" lang="fr" dir="auto">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:600px;">
                                <img alt="Goûtez la Changeleur" src="${PUBLIC_SITE_URL}/img/email/main.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600" height="auto" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:45px 25px 15px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:550px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 20px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">Bonjour,</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 12px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">Nous vous confirmons votre participation au jeu de la Chandeleur Whaou! et Le Ster.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 12px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">Le tirage au sort aura lieu le 20 mars 2026 au plus tard, les gagnants seront contactés par e-mail pour la remise des gains.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 12px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">N’oubliez pas de conserver votre preuve d’achat, elle peut vous être demandée dans la cadre de la gestion de l’offre.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 12px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">À très bientôt,</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 50px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;color:#000000;">L’équipe Whaou! & Le Ster</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 4px;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:9px;line-height:13px;text-align:left;color:#000000;">Pour en savoir plus sur nos actualités, rendez-vous sur le site <a href="https://whaou.com/" style="color: #000; text-decoration: underline;">www.whaou.com</a> et <a href="https://www.lesterlepatissier.com/" style="color: #000; text-decoration: underline;">www.lesterlepatissier.com</a>.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:9px;line-height:13px;text-align:left;color:#000000;">Pour consulter le règlement du jeu, rendez-vous sur <a href="https://www.jeu-chandeleur-lester-whaou.fr/" style="color: #000; text-decoration: underline;">www.jeu-chandeleur-lester-whaou.fr</a>.</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0 25px 20px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:550px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #DBE2E7;vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:15px 0 0;word-break:break-word;">
                        <div style="font-family:Tahoma, Arial, sans-serif;font-size:9px;line-height:13px;text-align:left;color:#000000;">Conformément à la législation en vigueur, les données personnelles collectées font l’objet d’un traitement dont le responsable de traitement est GOÛTERS MAGIQUES. Les données collectées sont nécessaires aux fins de la gestion de l’opération (remise des dotations) et seront traitées uniquement pour la durée nécessaire à la réalisation de la finalité visée ci-dessus. Les participants disposent d’un droit d’accès, de rectification, d’opposition, de limitation du traitement, d’effacement et de portabilité des données personnelles qu’ils pourront exercer gratuitement sur demande écrite à l’adresse DPO@gouters-magiques.com.</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>
	`;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, firstName } = await request.json();

		if (!email || !firstName) {
			return json({ message: 'Données manquantes' }, { status: 400 });
		}

		const htmlContent = generateEmailHTML();

		const headers = {
			'api-key': BREVO_API_KEY,
			accept: 'application/json',
			'content-type': 'application/json'
		};

		const dataMail = {
			sender: {
				name: 'Whaou! & Le Ster',
				email: 'noreply@jeu-chandeleur-lester-whaou.fr'
			},
			to: [
				{
					email: email,
					name: firstName
				}
			],
      replyTo: { email: 'whaoulester-chandeleur@tmsw.com'	},
			subject: 'Jeu « Goûter la Chandeleur » : Votre participation est enregistrée',
			htmlContent: htmlContent
		};

		const response = await fetch('https://api.brevo.com/v3/smtp/email', {
			method: 'POST',
			body: JSON.stringify(dataMail),
			headers
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error('Erreur Brevo:', errorData);
			throw new Error("Erreur lors de l'envoi de l'email");
		}

		const result = await response.json();

		return json({ success: true });
	} catch (error) {
		console.error('💥 Erreur envoi email:', error);
		return json({ message: "Erreur lors de l'envoi de l'email" }, { status: 500 });
	}
};