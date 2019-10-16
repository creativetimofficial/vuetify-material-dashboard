<template>
  <v-container>
    <v-layout justify-center>
      <v-flex
        xs12
        sm10
        md8
      >
        <material-card
          color="primary"
          title="Vuetify Material Dashboard PRO"
          text="Are you looking for more components? Please check our Premium Version of Vuetify Material Dashboard PRO."
        >
          <table class="v-table">
            <thead>
              <tr>
                <th/>
                <th class="subheading font-weight-light">Free</th>
                <th class="subheading font-weight-light">PRO</th>
              </tr>
            </thead>
            <tbody class="text-xs-center">
              <tr>
                <th class="text-xs-left font-weight-light subheading">Components</th>
                <td>60</td>
                <td>200</td>
              </tr>
              <tr>
                <th class="text-xs-left font-weight-light subheading">Plugins</th>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <th class="text-xs-left font-weight-light subheading">Example Pages</th>
                <td>3</td>
                <td>8</td>
              </tr>
              <tr>
                <th class="text-xs-left font-weight-light subheading">Login, Register, Pricing, Lock Pages</th>
                <td>
                  <v-icon color="error">mdi-close</v-icon>
                </td>
                <td>
                  <v-icon color="success">mdi-check</v-icon>
                </td>
              </tr>
              <tr>
                <th class="text-xs-left font-weight-light subheading">Premium Support</th>
                <td>
                  <v-icon color="error">mdi-close</v-icon>
                </td>
                <td>
                  <v-icon color="success">mdi-check</v-icon>
                </td>
              </tr>
              <tr>
                <th/>
                <td>Free</td>
                <td>Just for <b class="subheading">$79</b></td>
              </tr>
              <tr>
                <th/>
                <td>
                  <v-btn
                    color="grey"
                    disabled
                  >Current Version</v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >Upgrade to Pro</v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
