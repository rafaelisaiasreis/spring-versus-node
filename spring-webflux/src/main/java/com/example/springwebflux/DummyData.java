package com.example.springwebflux;

import com.example.springwebflux.document.Playlist;
import com.example.springwebflux.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import reactor.core.publisher.Flux;

import java.util.UUID;

public class DummyData implements CommandLineRunner {

  @Autowired
  PlaylistRepository playlistRepository;

  @Override
  public void run(String... args) throws Exception {

    playlistRepository.deleteAll()
        .thenMany(
            Flux.just("API REST Spring Boot", "Deploy de uma aplicação java no IBM Cloud", "Java 8",
                "Github", "Spring Security", "Web Service RESTFULL", "Bean no Spring Framework")
                .map(nome -> new Playlist(UUID.randomUUID().toString(), nome))
                .flatMap(playlistRepository::save))
        .subscribe(System.out::println);
  }
}