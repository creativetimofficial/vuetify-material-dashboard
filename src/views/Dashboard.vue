<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">
            Daily Sales
          </h4>

          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">
            Email Subscription
          </h4>
          <p class="category d-inline-flex font-weight-light">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="green"
          type="Line"
        >
          <h3 class="title font-weight-light">
            Completed Tasks
          </h3>
          <p class="category d-inline-flex font-weight-light">
            Last Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </material-chart-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Space"
          value="49/50"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <material-card
          color="orange"
          title="Employee Stats"
          text="New employees on 15th September, 2016"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          />
        </material-card>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <material-card
          class="card-tabs"
          color="green"
        >
          <template v-slot:header>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-bug
                </v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-code-tags
                </v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">
                  mdi-cloud
                </v-icon>
                Server
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list
                three-line
                class="py-0"
              >
                <v-list-item @click="complete(0)">
                  <v-list-item-action class="align-self-center">
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-item-action>

                  <v-list-item-title>
                    Sign contract for "What are conference organized afraid of?"
                  </v-list-item-title>

                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="green"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="primary">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="error">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>

                <v-divider />

                <v-list-item @click="complete(1)">
                  <v-list-item-action class="align-self-center">
                    <v-checkbox
                      :value="list[1]"
                      color="green"
                    />
                  </v-list-item-action>

                  <v-list-item-title>
                    Lines From Great Russian Literature? Or E-mails From My Boss?
                  </v-list-item-title>

                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="green"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="primary">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="error">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>

                <v-divider />

                <v-list-item @click="complete(2)">
                  <v-list-item-action class="align-self-center">
                    <v-checkbox
                      :value="list[2]"
                      color="green"
                    />
                  </v-list-item-action>

                  <v-list-item-title>
                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                  </v-list-item-title>

                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="green"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="primary">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon color="error">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-item>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38]
            ]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
            ]
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
          },
          options: {
            axisX: {
              showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id'
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name'
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right'
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right'
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right'
          }
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738'
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738'
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142'
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735'
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542'
          }
        ],
        tabs: 0,
        list: {
          0: false,
          1: false,
          2: false
        }
      }
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      }
    }
  }
</script>
