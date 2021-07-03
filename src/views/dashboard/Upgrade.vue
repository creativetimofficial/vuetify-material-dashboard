<template>
  <v-container
    id="upgrade"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card color="primary">
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              Vuetify Material Dashboard
            </div>

            <div class="text-subtitle-1 font-weight-light">
              Are you looking for more components? Please check our Premium Version of Vuetify Material Dashboard
            </div>
          </template>

          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="subheading font-weight-light text-center">
                  Free
                </th>
                <th class="subheading font-weight-light text-center">
                  PRO
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th class="text-left font-weight-light text-subtitle-1">
                  Components
                </th>
                <td>60</td>
                <td>200</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light text-subtitle-1">
                  Plugins
                </th>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light text-subtitle-1">
                  Example Pages
                </th>
                <td>3</td>
                <td>8</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light text-subtitle-1">
                  Login, Register, Pricing, Lock Pages
                </th>
                <td>
                  <v-icon color="error">
                    mdi-close
                  </v-icon>
                </td>
                <td>
                  <v-icon color="success">
                    mdi-check
                  </v-icon>
                </td>
              </tr>
              <tr>
                <th class="text-left font-weight-light text-subtitle-1">
                  Premium Support
                </th>
                <td>
                  <v-icon color="error">
                    mdi-close
                  </v-icon>
                </td>
                <td>
                  <v-icon color="success">
                    mdi-check
                  </v-icon>
                </td>
              </tr>
              <tr>
                <th />
                <td>Free</td>
                <td>Just for <b class="subheading">$79</b></td>
              </tr>
              <tr>
                <th />
                <td>
                  <v-btn
                    color="grey"
                    disabled
                  >
                    Current Version
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Upgrade to Pro
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',
  }
</script>

<style lang="sass">
  #upgrade
    .v-data-table
      th, td
        border: none !important
</style>
