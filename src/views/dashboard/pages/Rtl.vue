<template>
  <v-container
    id="rtl"
    fluid
    tag="section"
  >
    <v-row class="mb-10">
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="warning"
          text="بالإنزال وفي. خيار ومضى العمليات تم ذلك, تم معقل مرمى"
          title="لتكاليف يبق"
        >
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card>
          <template v-slot:heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >
                منتصف:
              </span>

              <v-tab class="mr-3">
                <v-icon class="me-2">
                  mdi-bug
                </v-icon>

                ضرب
              </v-tab>

              <v-tab class="mr-3">
                <v-icon class="me-2">
                  mdi-code-tags
                </v-icon>

                السفن
              </v-tab>

              <v-tab>
                <v-icon class="me-2">
                  mdi-cloud
                </v-icon>

                فصل.
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs"
            class="transparent"
          >
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row
                    :key="i"
                    align="center"
                  >
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-checkbox
                          v-model="task.value"
                          color="secondary"
                        />
                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9">
                      <div v-text="task.text" />
                    </v-col>

                    <v-col
                      cols="2"
                      class="text-right"
                    >
                      <v-icon class="mx-1">
                        mdi-pencil
                      </v-icon>
                      <v-icon
                        color="error"
                        class="mx-1"
                      >
                        mdi-close
                      </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-row>
          <template v-for="(plan, i) in plans">
            <v-col
              :key="i"
              cols="12"
              md="6"
            >
              <pages-plan-card :plan="plan" />
            </v-col>
          </template>

          <v-col cols="12">
            <base-material-testimony
              blurb="بعد و وسوء الأحمر, دون عقبت الهادي أم, قد حول قادة حكومة يتعلّق. أخذ حصدت اوروبا أن, كلا مهمّات اسبوعين التخطيط عل. وإيطالي الأوروبي و نفس. صفحة احداث أضف ان, هو مرجع نهاية لهيمنة كما. تم مايو لفشل المدن دول, جعل أن عسكرياً التّحول استرجاع."
              author="أليك طومسون"
              handle="@أليك طومسون"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <v-chip
                :color="timeline.color"
                class="overline mb-3"
                small
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="subtitle-1"
                v-text="timeline.text"
              />

              <div
                class="text-uppercase body-2"
                v-text="timeline.subtext"
              />

              <template v-if="timeline.action">
                <v-divider class="mb-3" />

                <v-menu
                  v-model="menu"
                  bottom
                  offset-y
                  origin=" top left"
                  right
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      :color="timeline.action"
                      large
                      rounded
                      v-on="on"
                    >
                      <v-icon
                        left
                        v-text="timeline.actionIcon"
                      />
                      <v-icon right>
                        {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="a in timeline.actions"
                        :key="a"
                        link
                      >
                        <v-list-item-title v-text="a" />
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-menu>
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Components
  import PagesPlanCard from '@/views/pages/components/PlanCard'

  export default {
    name: 'Widgets',

    components: {
      PagesPlanCard,
    },

    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'هوية شخصية',
          value: 'id',
        },
        {
          sortable: false,
          text: 'اسم',
          value: 'name',
        },
        {
          sortable: false,
          text: 'راتب',
          value: 'salary',
          align: 'right',
        },
        {
          sortable: false,
          text: 'بلد',
          value: 'country',
          align: 'right',
        },
        {
          sortable: false,
          text: 'مدينة',
          value: 'city',
          align: 'right',
        },
      ],
      items: [
        {
          id: 1,
          name: 'داكوتا رايس',
          country: 'النيجر',
          city: 'العود-تورنهاوت',
          salary: '$35,738',
        },
        {
          id: 2,
          name: 'مينيرفا هوبر',
          country: 'كوراساو',
          city: 'Sinaai-واس',
          salary: '$23,738',
        },
        {
          id: 3,
          name: 'سيج رودريجيز',
          country: 'هولندا',
          city: 'أوفرلاند بارك',
          salary: '$56,142',
        },
        {
          id: 4,
          name: 'فيليب شانلي',
          country: 'كوريا، جنوب',
          city: 'غلوستر',
          salary: '$38,735',
        },
        {
          id: 5,
          name: 'دوريس جرين',
          country: 'مالاوي',
          city: 'فيلدكيرشن في كارنتن',
          salary: '$63,542',
        },
      ],
      menu: false,
      plans: [
        {
          best: true,
          heading: 'جيوب سليمان، الإنزال',
          icon: 'mdi-home',
          title: '29$',
          text: 'الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.',
        },
        {
          heading: 'المتحدة لتقليعة',
          icon: 'mdi-sofa',
          title: 'قائمة',
          text: 'الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.',
        },
      ],
      tabs: 0,
      tasks: {
        0: [
          {
            text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
            value: true,
          },
          {
            text: 'خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بوسي؟',
            value: false,
          },
          {
            text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
            value: false,
          },
          {
            text: 'قم بإنشاء 4 تجارب مستخدم غير مرئية لم تعرف عنها أبدًا',
            value: true,
          },
        ],
        1: [
          {
            text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
            value: true,
          },
          {
            text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
            value: false,
          },
        ],
        2: [
          {
            text: 'خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بوسي؟',
            value: false,
          },
          {
            text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
            value: true,
          },
          {
            text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
            value: true,
          },
        ],
      },
      timelines: [
        {
          chip: 'جهة أي',
          color: 'error',
          icon: 'mdi-briefcase',
          text: 'قام كل ماذا العصبة اوروبا. أي جورج العالمي أخر, كان تم أطراف القوى استبدال. أسر ميناء تكتيكاً الجديدة، كل. جُل اللا التكاليف بـ, عرفها النزاع لليابان بـ أضف. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن أخر. حين ونتج أخرى قد. بالعمل بالمطالبة فقد قد. عن جنوب ومضى الشتاء.',
          subtext: 'مدن أن هُزم سكان, مكن.',
        },
        {
          chip: 'جُل حكومة',
          color: 'success',
          icon: 'mdi-puzzle',
          text: 'عل فكانت الثقيلة بلا. شيء بخطوط بالرّغم التبرعات عن, يطول بأيدي لم كلّ. معقل الغالي واتّجه لم وتم, أن الصفحة بالمحور حول, بال مرمى الصفحات قُدُماً و. الأخذ سبتمبر العالم من ذلك. ان يبق شدّت الأبرياء, الى الربيع، والمانيا كل.ودول الأهداف التقليدي عل أضف, كلا يقوم الأخذ الآلاف بل.',
        },
        {
          chip: 'هذا غينيا',
          color: 'info',
          icon: 'mdi-fingerprint',
          text: 'جهة المارق والديون التقليدية في, هو وترك المجتمع بريطانيا ذلك, لمّ ما العالم، اليابان،. ٣٠ فقامت أوروبا مشاركة بعد, ٢٠٠٤ الجو مساعدة ما حدى. في عليها وبحلول معارضة بعض. عن الأرض وبداية العمليات ولم. الجو جديداً الأوروبيّون أم به،. ثم التي نتيجة الآلاف جعل, عن المارق السادس قام. ما أخر فقامت الأجل الشرق،, فصل كل وسوء الأرواح. ثم بعد وشعار بأيدي. قبل وكسبت الغالي الولايات بل, ٣٠ أمّا أخرى لأداء أضف. هو منتصف معزّزة على. بـ أفريقيا التغييرات مما, أثره،.',
          action: 'info',
          actionIcon: 'mdi-wrench',
          actions: [
            'عمل',
            'عمل آخر',
            'شيء آخر هنا',
          ],
        },
      ],
    }),

    created () {
      this.$vuetify.rtl = true
      this.$i18n.locale = 'ar'
    },

    beforeDestroy () {
      this.$vuetify.rtl = false
      this.$i18n.locale = 'en'
    },
  }
</script>
