<template>
  <GradientBackground :mobile-position="275" :desktop-position="275" />
  <div class="pt-0 page-layout">
    <div class="lg:grid lg:grid-cols-3 lg:gap-7">
      <div
        v-for="event in events"
        :key="event.id"
        class="mb-5 overflow-hidden bg-white rounded-lg shadow-xl lg:mb-0"
      >
        <!-- Image -->
        <div
          @click="handleRedirect( event )"
          :class="[
            'w-full z-[1] relative bg-cover bg-no-repeat bg-center cursor-pointer',
            'pb-[59%] lg:pb-[54%]'
          ]"
          :style="{ 'background-image': 'url(' + event.imageUrl + ')' }"
        >
          <div
            class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center opacity-0 mask transitions hover:opacity-100 bg-black/50"
          >
            <img class="w-10" src="@/assets/images/icon/arr-r-solid-bg.png" alt="" />
          </div>
        </div>

        <!-- Content  -->
        <div class="p-3">
          <!-- name -->
          <p
            @click="handleRedirect( event )"
            class="text-lg font-bold cursor-pointer text-darkGreen hover:underline"
          >
            {{ event.name }}
          </p>

          <p class="mb-4 text-lg font-bold text-darkGreen">{{ event.city }}</p>
          <ul class="mb-6 text-sm">
            <li class="flex items-center mb-1">
              <img class="w-[15px] mr-4" src="@/assets/images/icon/checked-todo.png" alt="" />
              <p>場次：</p>
              <p>{{ event.city }}</p>
            </li>
            <li class="flex items-center mb-1">
              <img class="w-[15px] mr-4" src="@/assets/images/icon/clock.png" alt="" />
              <p>日期：</p>
              <p>{{ event.date }}</p>
            </li>
            <li class="flex items-center mb-1">
              <img class="w-[15px] mr-4" src="@/assets/images/icon/marker.png" alt="" />
              <p>地點：</p>
              <p>{{ event.place }}</p>
            </li>
            <li class="flex items-center mb-1">
              <img class="w-[15px] mr-4" src="@/assets/images/icon/user2.png" alt="" />
              <p>講師：</p>
              <p>{{ event.lecturer }}</p>
            </li>
          </ul>
          <RegisterButton
            @click="handleRedirect( event )"
            :eventStatus="REGISTER_STATUS"
            :status="event.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const ROUTE_NAME = inject('ROUTE_NAME')
const router = useRouter()

const REGISTER_STATUS = {
  ongoing: 0,
  full: 1,
  closed: 2
}

const events = ref([
  {
    id: 0,
    name: '2022中國信託越南基金產品說明會',
    city: '台北場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=1',
    status: 0 // any value is ok, define status value in REGISTER_STATUS
  },
  {
    id: 1,
    name: '2022中國信託越南基金產品說明會',
    city: '台中場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=2',
    status: 1
  },
  {
    id: 2,
    name: '2022中國信託越南基金產品說明會',
    city: '台南場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=3',
    status: 2
  },
  {
    id: 3,
    name: '2022中國信託越南基金產品說明會',
    city: '台北場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=4',
    status: 0
  },
  {
    id: 4,
    name: '2022中國信託越南基金產品說明會',
    city: '台中場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=5',
    status: 1
  },
  {
    id: 5,
    name: '2022中國信託越南基金產品說明會',
    city: '台南場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=6',
    status: 2
  },
  {
    id: 6,
    name: '2022中國信託越南基金產品說明會',
    city: '台北場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=7',
    status: 0
  },
  {
    id: 7,
    name: '2022中國信託越南基金產品說明會',
    city: '台中場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=8',
    status: 1
  },
  {
    id: 8,
    name: '2022中國信託越南基金產品說明會',
    city: '台南場',
    date: '2022.12.30',
    place: '中國信託金融園區',
    lecturer: '王曉明',
    imageUrl: 'https://picsum.photos/640/350?random=9',
    status: 2
  }
])

const handleRedirect = event => {
  if (event.status !== REGISTER_STATUS.ongoing) return
  router.push({ name: ROUTE_NAME.speech.detail.name, params: { id: event.id } })
}
</script>
