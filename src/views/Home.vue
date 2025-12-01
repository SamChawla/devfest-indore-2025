<template>
  <div class="home-page">
    <HeroSection />
    <div class="ai-impact-summit-section">
      <img src="@/assets/ai-impact-summit.BPYwQaU6.png" alt="AI Impact Summit" class="ai-impact-summit-image" />
    </div>
    <StatisticsSection />
    <WhatToExpectSection />
    <LastYearSection />
    <CommunityPartnersSection />
  </div>
</template>

<script>
import HeroSection from '@/components/homePage/HeroSection.vue'
import StatisticsSection from '@/components/homePage/StatisticsSection.vue'
import WhatToExpectSection from '@/components/homePage/WhatToExpectSection.vue'
import LastYearSection from '@/components/homePage/LastYearSection.vue'
import CommunityPartnersSection from '@/components/homePage/CommunityPartnersSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    StatisticsSection,
    WhatToExpectSection,
    LastYearSection,
    CommunityPartnersSection
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ai-impact-summit-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 var(--space-sm) 0;
  margin-top: -3rem;
}

.ai-impact-summit-image {
  width: 60%;
  max-width: 90%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .ai-impact-summit-section {
    margin-top: -3rem;
    padding: 0.5rem 0 var(--space-sm) 0;
  }

  .ai-impact-summit-image {
    width: 70%;
    max-width: 85%;
  }
}

@media (max-width: 768px) {
  .ai-impact-summit-section {
    margin-top: -2rem;
    padding: 0.75rem var(--padding-section-x) var(--space-sm) var(--padding-section-x);
  }

  .ai-impact-summit-image {
    width: 95%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .ai-impact-summit-section {
    margin-top: -1rem;
    padding: 0.5rem var(--padding-section-x) var(--space-xs) var(--padding-section-x);
  }

  .ai-impact-summit-image {
    width: 100%;
    max-width: 100%;
  }
}
</style>