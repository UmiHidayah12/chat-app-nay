"use client";

import { Card, TextInput, PasswordInput, Button, Title } from "@mantine/core";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card shadow="sm" padding="lg" radius="md" withBorder className="w-full max-w-md">
        <Title order={2} className="mb-6 text-center">
          Login to WhatsCatt
        </Title>

        <form className="space-y-4">
          <TextInput
            label="Email"
            placeholder="yourname@gmail.com"
            required
          />

          <PasswordInput
            label="Password"
            placeholder="password"
            required
          />

          <Button type="submit" fullWidth>
            Sign In
          </Button>
        </form>
      </Card>
    </main>
  );
}
