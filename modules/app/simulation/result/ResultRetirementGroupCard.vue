<template>
  <AppCard 
    v-if="simulationRetirementGroup.simulationRetirementOptions.length"
    :border="'w-4 bg-zinc-100'"
  >
    <template v-slot:header>
      <div class="w-full flex flex-col">
        <h3 class="h3 leading-relaxed ...">{{ simulationRetirementGroup.retirementGroup.title }}</h3>
        <div class="p text-slate-400 leading-relaxed" v-html="simulationRetirementGroup.retirementGroup.content"></div>
      </div>
    </template>
    <template v-slot:content>

        <ResultRetirementOptionCard
          v-for="(simulationRetirementOption, index) in simulationRetirementGroup.simulationRetirementOptions" 
          :simulationRetirementOption="simulationRetirementOption"
          :key="`simulationRetirementOption${index}`"
        />

      <p class="text-lg italic" v-if="isGranted">
        Pelos elementos apresentados, você tem direito à aposentadoria pela regra <b>{{ simulationRetirementGroup.retirementGroup.title }}</b>.
        Fale com o analista previdenciário para orientação sobre requerimento ou planejamento para avaliar a melhor estratégia para sua aposentadoria.
        <span class="font-bold text-blue-600">Fale com o analista!</span>
      </p>
      <p class="text-lg italic" v-else>
        Pelos elementos apresentados, você ainda não tem direito à aposentadoria pela regra <b>{{ simulationRetirementGroup.retirementGroup.title }}</b>.
        Fale com o analista previdenciário para verificar a inclusão de novos tempos, revisão de valores e avaliar a melhor estratégia para sua aposentadoria.
        <span class="font-bold text-blue-600">Fale com o analista!</span>
      </p>
    </template>
  </AppCard>
</template>

<script setup>
  
  import ResultRetirementOptionCard from '@/modules/app/simulation/result/ResultRetirementOptionCard'

  const props = defineProps({
    simulationRetirementGroup: Object
  })

  const isGranted = computed(() => {
    return props.simulationRetirementGroup.simulationRetirementOptions.filter((i) => i.isGranted).length > 0
  })

</script>