import React from 'react';
import { ArrowRight, CheckCircle, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert-Curated Content</h3>
              <p className="text-gray-600">
                Study materials designed by industry professionals
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with peers and mentors in our community
              </p>
            </div>
            <div className="text-center p-6">
              <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
              <p className="text-gray-600">
                Regular mock tests to track your progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <div className="space-x-4">
            <Link
              to="/mock-test"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Try Mock Test
            </Link>
            <Link
              to="/register"
              className="inline-block bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;