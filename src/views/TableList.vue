<template>
  <v-container class="fill-height" fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <ct-card
          header-color="green"
          header-title="Simple Table"
          header-text="Here is a subtitle for this table"
        >
          <v-data-table :headers="headers" :items="items" hide-default-footer />
        </ct-card>
      </v-col>

      <v-col cols="12">
        <ct-card
          header-color="green"
          flat
          full-width
          header-title="Table on Plain Background"
          header-text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-default-footer
          />
        </ct-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TableList",
  data() {
    return {
      headers: [
        {
          sortable: false,
          text: "Name",
          value: "name"
        },
        {
          sortable: false,
          text: "Country",
          value: "country"
        },
        {
          sortable: false,
          text: "City",
          value: "city"
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right"
        }
      ],
      items: [
        {
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738"
        },
        {
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738"
        },
        {
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142"
        },
        {
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735"
        },
        {
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542"
        },
        {
          name: "Mason Porter",
          country: "Chile",
          city: "Gloucester",
          salary: "$78,615"
        }
      ]
    };
  }
};
</script>
