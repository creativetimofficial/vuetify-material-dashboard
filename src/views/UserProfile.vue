<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card>
          <v-card
            slot="offset"
            color="secondary"
            class="elevation-10"
            dark
          >
            <div class="pa-3">
              <div class="title font-weight-light mb-2">Edit Profile</div>
              <div class="subheading font-weight-thin grey--text text--lighten-2">Complete your profile</div>
            </div>
          </v-card>

          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Company (disabled)"
                    disabled/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="User Name"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field label="Email Address"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field label="First Name"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field label="Last Name"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field label="City"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field label="Country"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Postal Code"
                    type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right>
                  <v-btn
                    large
                    class="mx-0 font-weight-light"
                    color="secondary"
                  >Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card offset="64">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="148">
            <img
              class="elevation-10"
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <div class="subheading font-weight-thin mb-3">CEO / CO-FOUNDER</div>
            <div class="headline font-weight-light mb-3">Alec Thompson</div>
            <div class="subheading font-weight-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</div>
            <v-btn
              large
              color="secondary"
              round
              class="font-weight-light"
            >Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
}
</script>
