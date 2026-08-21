<?php

namespace Tests\Feature;

use Tests\TestCase;

class PortfolioTest extends TestCase
{
    public function test_profile_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/profile');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => ['name', 'headline', 'professional_summary', 'focus']]);

        $this->assertEquals('Subhradip Roy', $response['data']['name']);
    }

    public function test_experience_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/experience');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
        $this->assertGreaterThan(0, count($response['data']));
    }

    public function test_projects_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/projects');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
        $this->assertGreaterThan(0, count($response['data']));
    }

    public function test_skills_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/skills');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
        $this->assertArrayHasKey('backend', $response['data']);
        $this->assertArrayHasKey('frontend', $response['data']);
        $this->assertArrayHasKey('databases_and_caching', $response['data']);
    }

    public function test_certifications_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/certifications');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
    }

    public function test_awards_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/awards');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
    }

    public function test_education_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/education');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => []]);

        $this->assertIsArray($response['data']);
    }

    public function test_social_links_endpoint_returns_success(): void
    {
        $response = $this->getJson('/api/v1/social-links');

        $response->assertStatus(200)
            ->assertJson(['data' => []])
            ->assertJsonStructure(['data' => ['linkedin', 'github']]);

        $this->assertIsArray($response['data']);
        $this->assertArrayNotHasKey('email', $response['data']);
        $this->assertArrayNotHasKey('phone', $response['data']);
    }

    public function test_contact_endpoint_returns_cv_contact_details(): void
    {
        $response = $this->getJson('/api/v1/contact');

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['email', 'phone', 'location']])
            ->assertJson([
                'data' => [
                    'email' => 'subhradip.1992@gmail.com',
                    'phone' => '7407781646',
                    'location' => 'Bengaluru',
                ],
            ]);
    }

    public function test_health_endpoint_still_works(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
    }
}
