<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SidebarComp/>
    <AboutComp/>
    <ProjectComp/>
    <ContactComp/>
    <DownloadComp/>
    <FooterComp/>
  </div>
</template>

<script>
import SidebarComp from '@/components/about/Sidebar.vue'
import AboutComp from '@/components/about/About.vue'
import ProjectComp from '@/components/about/Project.vue'
import ContactComp from '@/components/about/Contact.vue'
import DownloadComp from '@/components/about/Download.vue'
import FooterComp from '@/components/about/Footer.vue'

export default {
  name: 'home',
  components: {
    SidebarComp,
    AboutComp,
    ProjectComp,
    ContactComp,
    DownloadComp,
    FooterComp
  }
}
</script>
