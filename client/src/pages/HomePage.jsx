import React from 'react'
import Layout from '../components/layout/Layout';
import SliderSkeleton from '../Skeleton/SliderSkeleton';
import FeaturesSkeleton from '../Skeleton/FeaturesSkeleton';
import CategoriesSkeleton from '../Skeleton/CategoriesSkeleton';
import ProductsSkeleton from '../Skeleton/ProductsSkeleton';
import BrandsSkeleton from '../Skeleton/BrandsSkeleton';

const HomePage = () => {
  return (
    <Layout>
        <h1>Home Page</h1>
        <SliderSkeleton />
        <FeaturesSkeleton />
        <CategoriesSkeleton />
        <ProductsSkeleton />
        <BrandsSkeleton />
    </Layout>
  )
}

export default HomePage;