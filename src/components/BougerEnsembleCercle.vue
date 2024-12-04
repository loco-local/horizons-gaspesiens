<template>
  <CercleWrap
      title="Bouger Ensemble !"
      anchor="bouger-ensemble"
      :image="bougerEnsembleImage"
      id="bouger-ensemble"
  >
    <template v-slot:subtitle>
      Pour bouger et socialiser de façon agréable et sécuritaire
    </template>
    <template v-slot:content>
      <v-tabs slider-color="#ff3301">
        <!--        <v-tab-->
        <!--            class="body-1"-->
        <!--            @click="bougerEnsembleImage = 'cardio-boxe-viking.jpg'"-->
        <!--        >-->
        <!--          <v-icon left> sports_mma</v-icon>-->
        <!--          <span v-if="$vuetify.breakpoint.mdAndUp"> Cardio-Boxe Viking </span>-->
        <!--          <span v-else> Cardio-Boxe </span>-->
        <!--        </v-tab>-->
        <v-tab
            class="text-body-1"
            @click="bougerEnsembleImage = 'meditations_marchees.jpg'"
        >
          <v-icon start> self_improvement</v-icon>
          <span v-if="$vuetify.breakpoint.mdAndUp">
              Méditations marchées
            </span>
          <span v-else> Méditations </span>
        </v-tab>
        <v-tab class="text-body-1" @click="bougerEnsembleImage = 'initiation_ski.jpg'">
          <v-icon start> people</v-icon>
          <span v-if="$vuetify.breakpoint.mdAndUp">
              Semaine de relâche - activités familiales
            </span>
          <span v-else> Relâche </span>
        </v-tab>
        <v-tab class="text-body-1" @click="bougerEnsembleImage = 'bouger-ensemble-marche.jpg'">
          <v-icon start> nordic_walking</v-icon>
          <span v-if="$vuetify.breakpoint.mdAndUp"> Club de marche </span>
          <span v-else> Marche </span>
        </v-tab>
        <!--          <v-tab class="body-1">-->
        <!--            <v-icon left>-->
        <!--              self_improvement-->
        <!--            </v-icon>-->
        <!--            <span v-if="$vuetify.breakpoint.mdAndUp">-->
        <!--              Cours de Yoga-->
        <!--            </span>-->
        <!--            <span v-else>-->
        <!--              Yoga-->
        <!--            </span>-->
        <!--          </v-tab>-->
        <!-- <v-tab class="body-1">
          <v-icon left> emoji_emotions </v-icon>
          <span v-if="$vuetify.breakpoint.mdAndUp">
            Cours d'expression corporelle
          </span>
          <span v-else> Expression </span>
        </v-tab> -->
        <!--        <v-tab-item>-->
        <!--          <v-card flat>-->
        <!--            <v-card-title class="text-h6">-->
        <!--              <v-icon left>sports_mma</v-icon>-->
        <!--              Cardio-Boxe Viking édition extérieure-->
        <!--            </v-card-title>-->
        <!--            <v-list>-->
        <!--              <v-list-item-->
        <!--                  href="https://forms.gle/1SAdbssmnmKqdbWG8"-->
        <!--                  target="_blank"-->
        <!--                  class="subtitle-1"-->
        <!--              >-->
        <!--                <v-list-item-action>-->
        <!--                  <v-icon>assignment</v-icon>-->
        <!--                </v-list-item-action>-->
        <!--                <v-list-item-content>-->
        <!--                  <v-list-item-title>-->
        <!--                    Inscription au cours d'essai-->
        <!--                  </v-list-item-title>-->
        <!--                </v-list-item-content>-->
        <!--              </v-list-item>-->
        <!--              <v-list-item-->
        <!--                  href="https://forms.gle/GDFUjtbjDTGEH3cb7"-->
        <!--                  target="_blank"-->
        <!--                  class="subtitle-1"-->
        <!--              >-->
        <!--                <v-list-item-action>-->
        <!--                  <v-icon>assignment</v-icon>-->
        <!--                </v-list-item-action>-->
        <!--                <v-list-item-content>-->
        <!--                  <v-list-item-title>-->
        <!--                    Inscriptions à la session-->
        <!--                  </v-list-item-title>-->
        <!--                </v-list-item-content>-->
        <!--              </v-list-item>-->
        <!--            </v-list>-->
        <!--            <v-card-text class="body-1">-->
        <!--              <p>-->
        <!--                Premier cours d'essai du 20 février GRATUIT! Dépêchez-vous,-->
        <!--                les places sont limitées!-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                Venez vous entraîner avec Cardio-boxe Viking édition marche-->
        <!--                extérieure! Entraînement cardio à l'extérieur inspiré par la-->
        <!--                boxe. La Boxe est une bonne façon d'augmenter votre-->
        <!--                coordination, votre santé physique mais également de renforcer-->
        <!--                votre santé mentale. Dans une ambiance récréative et amusante-->
        <!--                vous apprendrez des techniques de base de la boxe et ferez-->
        <!--                travailler votre coeur dans un bon pas de marche et-->
        <!--                entraînement fitness. Avec Jasmine Savard, coach de-->
        <!--                cardio-boxe.-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold">Quand</v-subheader>-->
        <!--                Chaque samedi à partir du 20 février à 13h, sauf un samedi par-->
        <!--                mois. Session de 10 cours. Durée des séances: 1h-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold">Où?</v-subheader>-->
        <!--                À l'extérieur du Loco Local, 193a rue Grand-Pré-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold">Pour qui?</v-subheader>-->
        <!--                Ouvert à tous! Les enfants de moins de 12 ans doivent être-->
        <!--                accompagnés d'un parent. Maximum de 8 participants.-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold"-->
        <!--                >Équipement requis:-->
        <!--                </v-subheader>-->
        <!--                Bouteille d'eau, bottes de marche, mitaines ou gants.-->
        <!--                Vêtements pour être à l'extérieur dans un mélange de boxe et-->
        <!--                de marche. Aucun équipement spécifique requis pour cette-->
        <!--                session, cours sans contact vu les mesures sanitaires en-->
        <!--                place.-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold">Coût?</v-subheader>-->
        <!--                Selon vos moyens, entre 35 et 80$ pour la session. Détails sur-->
        <!--                la feuille d'inscription.-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                <v-subheader class="font-weight-bold"-->
        <!--                >Pour plus d’information sur l’activité-->
        <!--                </v-subheader-->
        <!--                >-->
        <!--                Coach Jasmine Savard : 514-463-8992-->
        <!--              </p>-->
        <!--              <p>-->
        <!--                * Si la session doit être annulée en raison de la COVID, il-->
        <!--                sera d'abord proposé de reporter la session, sinon vous serez-->
        <!--                remboursé au prorata des cours restants selon votre paiement.-->
        <!--                Les absences ne peuvent pas être remboursées.-->
        <!--              </p>-->
        <!--            </v-card-text>-->
        <!--          </v-card>-->
        <!--        </v-tab-item>-->
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h6">
              <v-icon start>self_improvement</v-icon>
              Méditations
            </v-card-title>
            <v-list>
              <v-list-item
                  href="https://forms.gle/W6wU265dhSixR5b68"
                  target="_blank"
                  class="text-subtitle-1"
              >
                <v-list-item-action>
                  <v-icon>assignment</v-icon>
                </v-list-item-action>

                  <v-list-item-title>
                    Inscription au cours d'essai
                  </v-list-item-title>

              </v-list-item>
            </v-list>
            <v-card-text class="text-body-1">
              <p>
                8 Séances de méditations marchées et de mouvement conscient
              </p>
              <p>
                <v-subheader>Quoi?</v-subheader>
                Des techniques variées de méditation en mouvement et marchée
                vous seront proposées, dont l’objectif est de favoriser la
                présence, la détente, la connexion à soi et à la nature. Des
                exercices de réchauffement ponctueront les séances. Aucun
                prérequis.
              </p>
              <p>
                <v-subheader>Quand?</v-subheader>
                Chaque jeudi, du 18 février au 8 avril. 17h30 à 18h15. Durée
                des séances: 45 minutes
              </p>
              <p>
                <v-subheader>Où?</v-subheader>
                L’activité aura lieu à l’extérieur, à différents endroits dans
                la nature entre Caplan et New Carlisle. Il est recommandé de
                s’habiller chaudement. Nous vous invitons à laisser un message
                en commentaire à la fin du formulaire si vous avez des
                restrictions d'horaire pour vous déplacer sur le territoire.
              </p>
              <p>
                <v-subheader>Pour qui?</v-subheader>
                Adultes et jeunes de 14 ans et plus.
              </p>
              <p>
                <v-subheader
                >Pour plus d’information sur l’activité
                </v-subheader
                >
                Bruno Mainville,
                <a href="tel:514-910-8363"> 514-910-8363 </a>
              </p>
            </v-card-text>
            <v-alert colored-border type="info" elevation="1" class="text-body-1">
              * Si la session doit être annulée en raison de la COVID, Il sera
              d'abord proposé de reporter la session, sinon vous serez
              remboursé au prorata des cours restants selon votre paiement.
              Les absences ne peuvent pas être remboursées.
            </v-alert>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-tabs slider-color="#ff3301">
              <v-tab class="text-body-1" @click="bougerEnsembleImage = 'initiation_ski.jpg'">
                <v-icon start>downhill_skiing</v-icon>
                <span v-if="$vuetify.breakpoint.mdAndUp"> Initiation au ski de fond </span>
                <span v-else> Ski de fond </span>
              </v-tab>
              <v-tab class="text-body-1" @click="bougerEnsembleImage = 'image_raquettes2.jpg'">
                <v-icon start>snowshoeing</v-icon>
                <span v-if="$vuetify.breakpoint.mdAndUp"> Découverte de sentiers en raquette </span>
                <span v-else> Raquette </span>
              </v-tab>
              <v-tab-item class="text-body-1">
                <v-card>
                  <v-card-title class="text-h6">
                    <v-icon start>downhill_skiing</v-icon>
                    Cours d’initiation au ski
                  </v-card-title>
                  <v-card-subtitle class="">
                    Avec l’instructeur Jack Rabbit Christophe Turcotte (Baie-des-Chaleurs
                    active et en santé).
                  </v-card-subtitle>
                  <v-card-text class="text-body-1">
                    <p class="font-weight-bold">
                      Inscription obligatoire via nos formulaires en ligne. Dépêchez-vous, les places sont limitées!
                    </p>
                    <v-list>
                      <v-list-item href="https://forms.gle/JGo882zUZNBWibMp6" target="_blank">

                          <v-list-item-title>
                            Inscription 5 à 7 ans
                          </v-list-item-title>

                      </v-list-item>
                      <v-list-item href="https://forms.gle/Kia5wKcfoqhkpEPS7" target="_blank">

                          <v-list-item-title>
                            Inscription 8 à 15 ans
                          </v-list-item-title>

                      </v-list-item>
                    </v-list>
                    <p>
                      <v-subheader>Où?</v-subheader>
                      Au Centre de Plein-Air Tourbillon, 100 Route de la Rivière, Bonaventure
                    </p>
                    <p>
                      <v-subheader>Quand?</v-subheader>
                      Choix entre mercredi le 3 mars et vendredi le 5 mars
                    </p>
                    <p>
                      <v-subheader>Coût</v-subheader>
                      Gratuit!
                    </p>
                    <p>
                      <v-subheader>5 à 7 ans</v-subheader>
                      (13h à 14h15): initiation à l’équilibre et jeux avec pause à l’intérieur après 30 minutes. Les
                      adultes accompagnateurs doivent rester proche du chalet pour les 5 à 7 ans.
                    </p>
                    <p>
                      <v-subheader>8 à 15 ans</v-subheader>
                      (14h30 à 16h): initiation à la poussée et à la glisse suivi d'une boucle de 2 km.
                    </p>
                    <p>
                      <v-subheader>Équipement requis</v-subheader>
                      Le prêt de skis est possible sur place, et ce, gratuitement. Détails dans le formulaire.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item class="text-body-1">
                <v-card>
                  <v-card-title class="text-h6">
                    <v-icon start>snowshoeing</v-icon>
                    Découverte de sentiers en raquette
                  </v-card-title>
                  <v-card-text class="text-body-1">
                    <p>
                      Inscrivez-vous à une ou plusieurs sorties
                      <a href="https://forms.gle/NNi6XC2QkJ7Arsbp7" target="_blank">
                        via notre formulaire !
                      </a>
                    </p>
                    <p>
                      Découvrez des endroits magnifiques aménagés par 3 centres de plein-air de notre région pendant ces
                      3 ballades en raquette! Nous vous ferons connaître les autres services offerts sur place (prêt de
                      skis, glissade etc.). Bienvenue aux familles et aux nouveaux arrivants, ouvert à tous! Avec
                      Dominique Landry, animatrice pour Bouger Ensemble.
                    </p>
                    <p>
                      Durée des randonnées: 1 à 2 h
                    </p>
                    <p>
                      Coût: Gratuit!
                    </p>
                    <p>
                      Mercredi 3 mars à 10h: Club de plein-air Tourbillon, Bonaventure (sentier de 3,6km)
                    </p>
                    <p>
                      Dimanche 7 mars à 10h: Domaine des Chutes du Ruisseau Creux, Saint-Alphonse (sentier de 6 km)
                    </p>
                    <p>
                      Dimanche 14 mars à 10h: Centre de plein-air les Monticoles, Paspébiac (Sentier à déterminer)
                    </p>
                    <p>
                      Pour qui? Amateurs de raquettes ou débutants, 8 ans et plus. 8 personnes/groupe max.
                    </p>
                    <p>
                      Équipement requis - Bouteille d'eau et collation au besoin. Amenez vos raquettes si vous en avez. Une quantité limitée de raquettes pour adultes et enfants sont disponible pour un prêt gratuit (voir formulaire d'inscription).
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!--              <v-tab class="body-1">-->
              <!--                <v-icon left>sports_mma</v-icon>-->
              <!--                Cardio-Boxe Viking extérieur pour toute la famille-->
              <!--              </v-tab>-->
              <!-- <v-tab class="body-1">
                <v-icon left>downhill_skiing</v-icon>
                Initiation au ski de fond pour 5 à 12 ans
              </v-tab> -->
              <!-- <v-tab class="body-1">
                <v-icon left>downhill_skiing</v-icon>
                Initiation au ski de fond pour 5 à 12 ans
              </v-tab> -->
              <!--              <v-tab-item>-->
              <!--                <v-card flat>-->
              <!--                  <v-list>-->
              <!--                    <v-list-item-->
              <!--                        href="https://forms.gle/Eax9wNV9FeJjmeZs5"-->
              <!--                        target="_blank"-->
              <!--                        class="subtitle-1"-->
              <!--                    >-->
              <!--                      <v-list-item-action>-->
              <!--                        <v-icon>assignment</v-icon>-->
              <!--                      </v-list-item-action>-->
              <!--                      <v-list-item-content>-->
              <!--                        <v-list-item-title>-->
              <!--                          Inscription-->
              <!--                        </v-list-item-title>-->
              <!--                      </v-list-item-content>-->
              <!--                    </v-list-item>-->
              <!--                  </v-list>-->
              <!--                  <v-card-text class="body-1">-->
              <!--                    <p>-->
              <!--                      Initiez-vous aux savoirs de base de la boxe dans un entraînement fitness et marche à-->
              <!--                      l'extérieur.-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      <v-subheader>Quand?</v-subheader>-->
              <!--                      Dimanche 28 février. Choix de deux heures : 13h et 14h15. Durée du cours: 1h-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      <v-subheader>Où?</v-subheader>-->
              <!--                      Départ à l'extérieur du Loco Local 193a Avenue Grand-Pré, Bonaventure-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      <v-subheader>Pour qui?</v-subheader>-->
              <!--                      Ouvert à tous! Les enfants de moins de 12 ans doivent être accompagnés d'un parent. Maximum de 8-->
              <!--                      participants.-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      <v-subheader>Équipement requis</v-subheader>-->
              <!--                      Bouteille d'eau, bottes de marche, mitaines ou gants. Vêtements pour être à l'extérieur dans un-->
              <!--                      mélange de boxe et de marche. Aucun équipement spécifique requis, cours sans contact vu les-->
              <!--                      mesures sanitaires en place.-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      <v-subheader>Coût?</v-subheader>-->
              <!--                      5 à 12$ par personne selon vos moyens. Détails sur la feuille d'inscription.-->
              <!--                    </p>-->
              <!--                    <p>-->
              <!--                      Pour plus d’information sur l’activité:-->
              <!--                      Coach Jasmine Savard : <a href="tel:514-463-8992">514-463-8992</a>-->
              <!--                    </p>-->
              <!--                  </v-card-text>-->
              <!--                </v-card>-->
              <!--              </v-tab-item>-->
            </v-tabs>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              <v-icon class="mr-2">nordic_walking</v-icon>
              Club de marche
            </v-card-title>
            <v-card-subtitle class="pt-4 text-subtitle-1">
              <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqfFFdkCp0P4d0WpEPzogwVtkCgsluYXTUtmjIJwNN7mc3UA/viewform?fbclid=IwAR3kDF4pCFT8sDJG7w6m0sLVY3ePW5q3ZdFb8vn2V3fzNZc7MnHVY39GdRM"
                  target="_blank"
              >
                <v-icon class="mr-2">assignment</v-icon>
                Formulaire d'inscription à remplir
              </a>
            </v-card-subtitle>
            <v-card-text class="text-body-1">
              <p>
                Vous souhaitez vous remettre en mouvement et vous ressentez
                l'envie et le besoin de partager des moments de groupe ? Venez
                rejoindre notre club de marche !!! On vous invite à
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScqfFFdkCp0P4d0WpEPzogwVtkCgsluYXTUtmjIJwNN7mc3UA/viewform?fbclid=IwAR3kDF4pCFT8sDJG7w6m0sLVY3ePW5q3ZdFb8vn2V3fzNZc7MnHVY39GdRM"
                    target="_blank"
                >
                  vous inscrire
                </a>
                pour nous faire savoir votre intérêt, c'est gratuit! L'heure
                et le lieu seront décidés en fonction des personnes inscrites,
                nous vous contacterons pour vous en informer.
              </p>
              <p>C'est une activité gratuite !!</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--          <v-tab-item>-->
        <!--            <v-card flat>-->
        <!--              <v-card-title>-->
        <!--                <v-icon class="mr-2">self_improvement</v-icon>-->
        <!--                Cours de Yoga-->
        <!--              </v-card-title>-->
        <!--              <v-card-subtitle class="subtitle-1 pt-4">-->
        <!--                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGH6o1WhMQI4lkCyeEX2a7lyTZQWAFiHEd1rphUrhSpEqIXQ/viewform?fbclid=IwAR2AYwXZ7feqFmdOztRY7qQLqfC1o9iO0GPoILQaH533bWVvwnY7Xfm2IB4"-->
        <!--                   target="_blank">-->
        <!--                  <v-icon class="mr-2">assignment</v-icon>-->
        <!--                  Formulaire d'inscription à remplir-->
        <!--                </a>-->
        <!--              </v-card-subtitle>-->
        <!--              <v-card-text class="body-1">-->
        <!--                <p>-->
        <!--                  Envie de vous délier le corps et d'apaiser votre esprit? Venez faire du yoga avec Simon Carrothers!-->
        <!--                  Les cours ont lieu les mardi soir au Loco Local de Bonaventure (193A, avenue Grand-Pré).-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  Attention : cette activité se déroulera si nous repassons en zone orange ou jaune !!!-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  Coût: On demande une participation suggérée de 30$ à 100$ pour une session de 8 cours, selon vos-->
        <!--                  capacités financières.* Le paiement se réalisera par virement bancaire ou virement interact (voir-->
        <!--                  plus-->
        <!--                  loin dans la rubrique inscription).-->
        <!--                  Si les cours doivent cesser à cause de la COVID, les cours restants vous seront remboursés.-->
        <!--                  Les absences ne peuvent pas être remboursées.-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  *Contactez-nous en privé si vous avez des limites financières à participer au cours, c’est dans-->
        <!--                  l’esprit du Loco Local de permettre l’accès aux activités peu importe votre revenu!-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  Les places sont limitées !-->
        <!--                </p>-->
        <!--              </v-card-text>-->
        <!--            </v-card>-->
        <!--          </v-tab-item>-->
        <!-- <v-tab-item>
          <v-card flat>
            <v-card-title>
              <v-icon class="mr-2">emoji_emotions</v-icon>
              Expression corporelle
            </v-card-title>
            <v-card-subtitle class="subtitle-1 pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeJY6cc5vNe9nIIr2I73pf1HeCQB8x_Xid8PQ58G_X6i4xR1w/viewform?fbclid=IwAR1vYwLCoJElOwUygM2-XWy2aX5Mq4qfFn7VzQEaKm0blguYZSxqNSN7crw"
                target="_blank"
              >
                <v-icon class="mr-2">assignment</v-icon>
                Formulaire d'inscription à remplir
              </a>
            </v-card-subtitle>
            <v-card-text class="body-1">
              <p>
                Vous souhaitez explorer les possibilités de votre corps, votre
                créativité dans le mouvement, développer votre conscience
                corporelle et le lâcher prise? Venez participer aux cours
                d’expression corporelle avec Élodie Samuel-Leduc!
              </p>
              <p>
                <span class="font-weight-bold">Quand ?</span>
                Horaire à venir (activités ponctuelles)
              </p>
              <p>
                <span class="font-weight-bold">Où ?</span>
                Lieu à confirmer
              </p>
              <p>
                <span class="font-weight-bold">Coût</span>
                Contribution suggérée entre 5$ et 10$.
              </p>
              <p>
                *Contactez-nous en privé si vous avez des limites financières
                à participer au cours, c’est dans l’esprit du Loco Local de
                permettre l’accès aux activités peu importe votre revenu!
              </p>
              <p>Les places sont limitées !</p>
            </v-card-text>
          </v-card>
        </v-tab-item> -->
      </v-tabs>
      <v-row>
        <v-col cols="12" class="vh-center">
          <v-card max-width="500" class="align-self-center">
            <v-card-actions class="text-body-1">
              <v-spacer></v-spacer>
              <v-icon class="mr-8" size="large">6_ft_apart</v-icon>
              <v-icon class="mr-8" size="large">sanitizer</v-icon>
              <v-icon class="mr-8" size="large">masks</v-icon>
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-card-actions class="text-body-1">
              Nous respectons les mesures sanitaires.
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </CercleWrap>
</template>

<script>

import CercleWrap from "@/components/CercleWrap.vue";

export default {
  name: "BougerEnsembleCercle",
  components: {
    CercleWrap
  },
  data: function () {
    return {
      bougerEnsembleImage: "meditations_marchees.jpg",
      bougerEnsembleTab: 0,
    }
  }
}
</script>

<style scoped>

</style>
