<template>
	<div class="b-timeline clearfix">
		<div class="b-timeline_img"></div>
		<div class="b-timeline_content clearfix2">
			<h2>{{ title }}</h2>
			<p>{{ description }}</p>
			<span class="date">{{ date }}</span>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

export default {
  name: 'entry',
  props: ['title', 'description', 'url', 'date', 'photo']
}
</script>
