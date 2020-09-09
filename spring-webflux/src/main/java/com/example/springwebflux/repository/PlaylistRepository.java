package com.example.springwebflux.repository;

import com.example.springwebflux.document.Playlist;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends ReactiveMongoRepository<Playlist, String> {
}
