# Cards

We think cards are one of the best ways to organise your information. We went all out with possibilities and we recommended finding the right fit for your product. ***You don't have to import the card components, these are globally declared.***

<script>
module.exports = {
  data() {
   return {
    dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38]
            ]
          },
          options: {
            low: 0,
            high: 50, // creative tim: we recommend you to set the high as the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        }
   }
  }
}
</script>

## Stats card

:::demo
```html
<template>
  <div>
    <material-stats-card
      color="green"
      icon="mdi-store"
      title="Revenue"
      value="$34,245"
      sub-icon="mdi-calendar"
      sub-text="Last 24 Hours"
    />
  </div>
</template>

<script>
  export default {}
</script>
```
:::

### StatsCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Card type   | string  |   primary/danger/success/info/warning        |     primary     |
| icon     | Card icon   | string  |   -        |     -     |
| subIcon     | Card subIcon   | string  |   -        |     -     |
| subIconColor     | Card subIconColor   | string  |   -        |     -     |
| subTextColor     | Card subTextColor   | string  |   -        |     -     |
| subText     | Card subText   | string  |   -        |     -     |
| title     | Card title   | string  |   -        |     —     |
| value     | Card value   | string  |   -        |     —     |
| smallValue     | Card smallValue   | string  |   -        |     —     |

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  actions  | Content for card actions |



## Chart card

For the implementation of graphic charts, we used [Vue Chartist](https://github.com/Yopadd/vue-chartist).

:::demo
```html
<template>
  <material-chart-card
    :data="dailySalesChart.data"
    :options="dailySalesChart.options"
    color="info"
    type="Line"
  >
    <h4 class="title font-weight-light">Daily Sales</h4>
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

    <template slot="actions">
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock-outline
      </v-icon>
      <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
    </template>
  </material-chart-card>
</template>

<script>
  export default {
    data(){
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
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
      }
      }
    }
  }
</script>
```
:::

### ChartCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Chart type   | string  |   line/bar/pie        |    -     |
| options     | Chart options   | Object  |   -        |    -     |
| data     | Chart data   | Object  |   -        |    -     |
| ratio     | Chart ratio   | String  |   -        |    -     |
| event-handlers     | Chart event   | Array  |   -        |    -     |
| responsive-options     | Chart responsive   | Array  |   -        |    -     |

### ChartCard Slots
| Name | Description |
|---------- |-------- |
|  actions  | Default card actions |

> Note: for more details about the card props and attributes please see the **Card** section from [vuetifyjs.com](https://vuetifyjs.com/en/components/cards#introduction)
